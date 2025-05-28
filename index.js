require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const axios = require("axios");

const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.post("/client", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email required." });

  try {
    await axios.post(process.env.N8N_WEBHOOK_URL, { name, email, message });

    await db.query(
      "INSERT INTO clients (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    res
      .status(201)
      .json({ message: "Client saved and email sent!", content: message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
