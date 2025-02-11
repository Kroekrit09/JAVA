const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQBook.sqlite'
});

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncreament: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelize.sync();

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// สร้างตารางถ้ายังไม่มี
sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

// 📌 **ดึงหนังสือทั้งหมด**
app.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 📌 **ดึงหนังสือตาม ID**
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.json(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 📌 **สร้างหนังสือใหม่**
app.post('/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 📌 **อัปเดตหนังสือ**
app.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        await book.update(req.body);
        res.send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 📌 **ลบหนังสือ**
app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        await book.destroy();
        res.send({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Route to delete a book
app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        await book.destroy();
        res.send({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server is running at http://localhost:${port}`));