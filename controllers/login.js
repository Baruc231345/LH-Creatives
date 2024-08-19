const express = require("express");
const crypto = require("crypto");
const db = require("../routes/database.js");

const login = async (req, res) => {
  const { name, password } = req.body;
  const combinedString = name + password;

  console.log("Received Name in Controller:", name);
  console.log("Received Password in Controller:", password);

  const hashedString = crypto.createHash('md5').update(combinedString).digest('hex');
  console.log("Hashed Password: ", hashedString);

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, hashedString]);

    if (rows.length > 0) {
      console.log("Login successful");
      req.session.status = 'success'; 
      
      res.json({ message: "Login successful", status: req.session.status });
    } else {
      console.log("Invalid name or password");
      req.session.status = 'failure'; 

      res.status(401).json({ message: "Invalid name or password", status: req.session.status });
    }
  } catch (error) {
    console.error("Database query error:", error);
    req.session.status = 'error';

    res.status(500).json({ message: "Internal server error", status: req.session.status });
  }
};

module.exports = login;