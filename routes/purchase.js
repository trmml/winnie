let router = require('express').Router();

let User = require('../models/User')
    , Post = require('../models/Post');

let authenticated = require('./middle.js');

router.route('/purchase/:id')
    .get(authenticated, async (req, res) => {
        let id = req.params.id ?? res.send({error: "no id parameter provided"});
    
        let post = await Post.findById(id),
        author = await User.findById(post.author);
    
        req.session.post = post;
    
        res.render('checkout', {post: post});
    })        
    .post(authenticated, async (req, res) => {
        let id = req.params.id ?? res.redirect('/');
        const post = await Post.findById(id);
    
        console.log('purchasing post');
        console.log(post);
    
        let product = await stripe.products.create({name:post.body});
        let price = await stripe.prices.create({
            unit_amount: post.price * 100,
            currency: 'usd',
            product: product.id,
        })
    
        let url = req.protocol + '://' + req.get('host') + req.originalUrl;
    
        const session = await stripe.checkout.sessions.create({
            line_items: [{price: price.id, quantity: 1}],
            mode: 'payment',
            success_url: url+"/success",
            cancel_url: url+"/cancel"
        });
    
        req.session.stripe = session;
        res.redirect(303, session.url);
})

module.exports = router;