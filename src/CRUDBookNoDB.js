require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let books = [  // Use 'books' instead of 'book'
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3'
    },
];

app.get('/book', (req, res) => {
    res.json(books);  // Use 'books' here
});

app.get('/book/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));  // Use 'books' here
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
});

app.post('/book', (req, res) => {
    const book = {
        id: books.length + 1,  // Use 'books' here
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);  // Use 'books' here
    res.send(book);
});

app.put('/book/:id', (req, res) => {
  // Find the book by ID
  const book = books.find(b => b.id === parseInt(req.params.id));
  
  if (!book) {
      return res.status(404).send('Book not found');  // Return here to stop further execution
  }

  // Update the book details with data from the request body
  book.title = req.body.title;
  book.author = req.body.author;

  // Send the updated book back to the client
  res.send(book);
});

app.delete('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));  // Use 'books' here
    if (!book) return res.status(404).send('Book not found');
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
