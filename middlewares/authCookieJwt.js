const jwt = require("jsonwebtoken");

function authCookieJwt(req, res, next) {
    const token = req.cookies.token;
    
    if (!token) {
        return res.redirect('/');
    }

    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
    } catch (err) {
        console.error("JWT verification error:", err);
        res.clearCookie("token");
        if (req.session) {
            req.session.destroy((sessionErr) => {
                if (sessionErr) {
                    console.error("Session destruction error:", sessionErr);
                }
                res.redirect('/');
            });
        } else {
            res.redirect('/');
        }
    }
}

module.exports = authCookieJwt;
