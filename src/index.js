require("dotenv").config();
const express = require('express');

// สร้าง instance ของ express
const app = express();

// กำหนด port
const PORT = process.env.PORT;

// กำหนด route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
