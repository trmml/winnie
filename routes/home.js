let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.get('/', async (req,res)=>{
    if (!req.session.user) return res.render('index');
    let posts = await Post.find().populate('author');

    let data = {user:req.session.user};
    data.posts = posts ?? posts

    res.render('home', data);
});

module.exports = router;