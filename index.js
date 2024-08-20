const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(session({
  secret: 'LH and creation',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, 
    httpOnly: true,
    maxAge: 3600000 // 60 minutes or 1 hour
  }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));
app.listen(3000, () => {
  console.log("Port 3000");
});