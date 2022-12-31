let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

router.route('/')
    .get((req, res) => res.render('register'))
    .post(async (req, res) => {
        let {username, password} = req.body ?? res.send({error: "no credentials provided"});
        let u = new User({
            username: username,
            password: password
        });
    
        try {
            req.session.user = await u.save();
            res.redirect('/');
        } catch {
            req.flash('message', 'invalid username/password');
            res.render('register', {messages:req.flash('message')})
        }
    });

module.exports = router;