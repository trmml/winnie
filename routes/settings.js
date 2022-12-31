let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.route('/')
    .get(authenticated, (req, res) => {
        res.render('settings', {user: req.session.user});
    })
    .post(authenticated, async (req, res) => {
        let body = req.body;
        
        // if all fields empty
        if (!body.username && (!body.pass1 || !body.pass2)) {
            return res.redirect('/settings');
        }
    
        // if new username == old
        if (body.username ===  req.session.user.username) {
            res.redirect('/settings');
        }
        
        // reset username
        try {
            let user = await User.findOneAndUpdate({user:req.session.user}, {username:body.username}, {new:true});
            req.session.user = user;
            
            return res.redirect('/settings');
        } catch {
            res.send({error:"could not update username"});
        }
    
        // if pass != match
        if (body.pass1 !== body.pass2) {
            return res.redirect('/settings');
        }
    
        // reset password
        try {
            User.findOneAndUpdate({user:req.session.user}, {password:body.pass1});
            res.redirect('/settings');
        } catch {
            res.send({error: "could not reset password"});
        }
    });

module.exports = router;