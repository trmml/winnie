let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.route('/deactivate')
    .post(authenticated, (req, res) => {
        try {
            User.findOneAndDelete(req.session.user).
                then(_ => {
                    req.session.destroy();
                    res.redirect('/')
                }).
                catch(_ => {
                    res.send({error:"could not deactivate"})
                });
        } catch {
            res.send({error:"could not deactivate"})
        }
    });

module.exports = router;