function authSession(req, res, next) {
    if (req.session.status === "success") {
      next();
    } else {
      res.clearCookie("token")
      res.redirect('/');
    }
  }
  
  module.exports = authSession;