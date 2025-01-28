require("dotenv").config();
const express = require('express')
const app = express();

app.use(express.json());

let book = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Athor 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Athor 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Athor 3'
    },
];

app.get('/book', (req, res) => {
    res.json(book);
});

app.get('/book/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    res.json(book);
});

app.post('/book', (req, res) => {
    const book = {
        id: book.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    book.title = req.body.title;
    book.author = req.body.author;
    res.send(book);
  });
  
  app.delete('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}...`));
  