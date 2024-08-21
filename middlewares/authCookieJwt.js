
const jwt = require("jsonwebtoken");

function authCookieJwt(req, res, next) {
    const token = req.cookies.token;
    try{
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
    }
    catch(err){
        console.log(err)
        res.clearCookie("token")
        res.redirect('/');
    }
  }
  module.exports = authCookieJwt;