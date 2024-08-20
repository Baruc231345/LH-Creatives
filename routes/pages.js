const express = require("express");
const app = express();
const login = require("../controllers/login");
const router = express.Router();
const path = require('path');
const pub_path = path.join(__dirname, '../public');
const authSession = require("../middlewares/authSession")
const logout = require("../controllers/logout")
router.use(express.static(pub_path));

router.get('/login', (req, res) => {
  res.sendFile(path.join(pub_path, 'login.html'));
});

router.get('/dashboard', authSession,(req, res) => {
  res.sendFile(path.join(pub_path, 'dashboard.html'));
});

router.get('/page', authSession, (req, res) => {
  res.send("Welcome to the protected page!");
});

router.get('/signin', (req, res) => {
    res.sendFile(path.join(pub_path, 'signin.html'));
})

router.get("/test", (req, res) => {
  res.sendFile(path.join(pub_path, 'loginGrid.html'));
});

router.get("/", (req, res) => {
  console.log("This is res.session: ", req.sessionID)
  res.sendFile(path.join(pub_path, 'menu.html'));
});

//// Logout POST
router.post('/logout', authSession, logout);

module.exports = router;
