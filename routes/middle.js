function authenticated (req, res, next) {
    if (!req.session || !req.session.user)
        res.redirect('/login');
    next();
}

module.exports = authenticated;