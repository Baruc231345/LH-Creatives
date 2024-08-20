const logout = async (req, res) => {
  try {
    req.session.status = null;
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("Failed to log out.");
      }
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  } catch (error) {
    res.status(500).send("An error occurred during logout.");
  }
};

module.exports = logout;
