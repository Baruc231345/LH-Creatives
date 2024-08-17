const express = require("express");
const session = require("express-session"); // Correctly require express-session
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

// Middleware setup
app.use(session({
  secret: 'LH and creation',
  resave: false,
  saveUninitialized: false // Correct spelling
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Route setup
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});