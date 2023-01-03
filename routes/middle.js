function authenticated (req, res, next) {
    console.log(req.session);
    if (!req.session || !req.session.user)
        return res.redirect('/login');
    next();
}

module.exports = authenticated;