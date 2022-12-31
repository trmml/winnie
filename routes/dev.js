let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');
    
router
    .get('/users.json', async (req, res) => {
        try {
            let users = await User.find();
            res.send(users);
        } catch {
            res.send({error: "could not find users"});
        }
    });

router
    .get('/posts.json', async (req, res) => {
        try {
            let posts = await Post.find();
            res.send(posts);
        } catch {
            res.send({error:"could not find posts"});
        }
    });

module.exports = router;