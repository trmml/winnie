let express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose');

let User = require('./models/User.js')
    , Post = require('./models/Post.js');

let s_config = require('./config/stripe');
let stripe = require('stripe')(s_config.PRIVATE);

router.use('/', require('./routes/home.js'));
router.use('/login', require('./routes/login.js'));
router.use(require('./routes/register.js'));
router.use(require('./routes/post.js'));
router.use(require('./routes/purchase.js'));
router.use(require('./routes/user.js'));
router.use(require('./routes/settings.js'));
router.use(require('./routes/logout.js'));
router.use(require('./routes/deactivate.js'));
router.use(require('./routes/dev.js'));
router.use(require('./routes/messages.js'));
router.use(require('./routes/404.js'));

module.exports = router;