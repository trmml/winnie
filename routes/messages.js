let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.get('/purchase/:id/success', (req, res) => {
    console.log("success")
    res.render('success', {session: req.session.stripe});
});

router.get('/purchase/:id/cancel', (req, res) => {
    res.render('cancel', {error: req.session});
});

module.exports = router;