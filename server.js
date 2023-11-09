const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Srinivas:Srinivas@cluster0.eu5eekh.mongodb.net/crudBook?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String
});

const Book = mongoose.model('Book', bookSchema);

app.post('/books', async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const existedBook = await Book.find({ title });
        if (existedBook.length > 0) {
          res.status(400).send('Book already exists');
        } else {
          const newBook = new Book({ title, author, summary });
          const savedBook = await newBook.save();
          res.json({ message: 'book created successfully' });
        }
      } catch (err) {
        res.status(500).send('Something went wrong');
      }
  });

// Get all books in database
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Getting a book by its ID
app.get('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a book's detail
app.put('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const { title, author, summary } = req.body;
    try {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).send('Book not found');
      } else {
        await Book.findByIdAndUpdate(bookId, { title, author, summary });
        res.send('Book updated successfully');  
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
// Delete a book by ID
app.delete('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {

    const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).send('Book not found');
      } else {
        await Book.findByIdAndRemove(bookId);
    res.send('Book deleted successfully');
      }
    
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
