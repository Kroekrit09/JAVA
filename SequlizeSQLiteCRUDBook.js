const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
app.use(express.json());

// เชื่อมต่อฐานข้อมูล SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./Database/Book.sqlite",
});

// กำหนดโมเดล Book
const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // ✅ แก้พิมพ์ผิด
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// สร้างตารางถ้ายังไม่มี
sequelize.sync().then(() => {
  console.log("📚 Database & tables created!");
});

// 📌 **ดึงหนังสือทั้งหมด**
app.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 📌 **ดึงหนังสือตาม ID**
app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 📌 **สร้างหนังสือใหม่**
app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 📌 **อัปเดตหนังสือ**
app.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    await book.update(req.body);
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 📌 **ลบหนังสือ**
app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    await book.destroy();
    res.send({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// ⭐ Start the server
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`🚀 Server is running at http://localhost:${port}`),
);
