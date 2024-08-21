const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); 
require('dotenv').config(); 

const app = express();

app.use(cookieParser()); 

app.use(session({
  secret: 'LH and creation',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, 
    httpOnly: true,
    maxAge: 3600000 // 1 hour
  }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Parent Route
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

app.listen(3000, () => {
  console.log("Port 3000");
});
