let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

router.route('/')
    .get((req,res)=>res.render('login'))
    .post(async (req, res) =>{
        try {
            let user = await User.findOne({username: req.body.username});
    
            if (user.compare(req.body.password)) {
                req.session.user = user;
                res.redirect('/');
            } else {
                req.flash('message', 'invalid username/password');
                res.render('login', {messages:req.flash('message')});            }
        } catch {
            req.flash('message', `could not find ${req.body.username}`);
            res.render('login', {messages:req.flash('message')});
        }
    });
    
module.exports = router;