let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.route('/user/:username')
    .get(authenticated, async (req, res) => {
        let username = req.params.username ?? res.send({error: "no parameter provided"});

        let user = await User.findOne({username:username}),
            posts = await Post.find({author:user._id});

        res.render('profile', {user: user, posts: posts});
    });

module.exports = router;