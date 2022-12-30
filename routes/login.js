let router = require('express').Router();

router.route('/login')
    .get((req,res)=>res.render('login'))
    .post(async (req, res) =>{
        try {
            let user = await User.findOne({username: req.body.username});
    
            if (user.compare(req.body.password)) {
                req.session.user = user;
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } catch {
            req.flash('message', 'invalid username/password');
            res.render('login', {messages:req.flash('message')});
        }
    });
    
module.exports = router;