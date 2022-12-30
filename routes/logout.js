let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.route('/logout')
    .get(authenticated, (req, res) => {
        try {
            req.session.destroy();
            res.redirect('/');
        } catch {
            res.render({error: "could not logout"});
        }
    });

module.exports = router;