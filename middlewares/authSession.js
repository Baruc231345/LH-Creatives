function authSession(req, res, next) {
    if (req.session.status === "success") {
      next();
    } else {
      res.redirect('/');
    }
  }
  
  module.exports = authSession;