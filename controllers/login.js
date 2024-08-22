const express = require("express");
const crypto = require("crypto");
const db = require("../routes/database.js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { name, password } = req.body;
  const combinedString = name + password;

  console.log("Received Name in Controller:", name);
  console.log("Received Password in Controller:", password);

  const hashedString = crypto
    .createHash("md5")
    .update(combinedString)
    .digest("hex");
  console.log("Hashed Password: ", hashedString);

  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE name = ? AND password = ?",
      [name, hashedString]
    );

    if (rows.length > 0) {
      console.log("Login successful");

      const token = jwt.sign(
        { userId: rows[0].id, name: rows[0].name },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        //secure: false,
        //maxAge: 10000,
        //signed: true
      });

      req.session.status = "success";
      res.json({ message: "Login successful", status: req.session.status });
    } else {
      const invalidError = "Invalid Name or Password!!";
      console.log(invalidError);
      req.session.status = "failure";
      res
        .status(401)
        .json({ message: invalidError, status: req.session.status });
    }
  } catch (error) {
    console.error("Query Error:", error);
    req.session.status = "error";
    res
      .status(500)
      .json({ message: "Internal Error", status: req.session.status });
  }
};

module.exports = login;
