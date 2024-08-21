const express = require("express");
const router = express.Router();
const path = require('path');
const pub_path = path.join(__dirname, '../public');
const authSession = require("../middlewares/authSession");
const authCookieJwt = require("../middlewares/authCookieJwt");
const logout = require("../controllers/logout");

// Static
router.use(express.static(pub_path));

// Routes
router.get('/login', (req, res) => {
  res.sendFile(path.join(pub_path, 'login.html'));
});

router.get('/dashboard', authCookieJwt, (req, res) => {
  res.sendFile(path.join(pub_path, 'dashboard.html'));
});

router.get('/signin', (req, res) => {
  res.sendFile(path.join(pub_path, 'signin.html'));
});

router.get("/", (req, res) => {
  console.log("This is req.sessionID: ", req.sessionID);
  res.sendFile(path.join(pub_path, 'menu.html'));
});

// Logout POST
router.post('/logout', authSession, logout);

module.exports = router;
