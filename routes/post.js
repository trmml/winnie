let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.route('/')
    .post(authenticated, async (req, res) => {
        if (!req.body) return res.send({error: "no request body provided"});
        
        let {body,price} = req.body ?? res.send({error: "no credentials provided"});

        let post = new Post({
            body:body,
            price:price,
            author:req.session.user._id
        });

        try {
            post.save();
            res.redirect('/');
        } catch {
            res.send({error: "error saving post"});
        }
    });

router.route('/post/:id')
    .get(authenticated, async (req, res) => {
        let id = req.params.id ?? res.send({error: "no id parameter provided"});

        let post = await Post.findById(id),
            author = await User.findById(post.author);
        console.log(post);
        console.log(author);

        res.render('post', {user:req.session.user, post:post, author:author.username});
    });

module.exports = router;