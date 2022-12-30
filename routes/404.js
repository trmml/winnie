let router = require('express').Router();

router.route('*').get((req, res) =>
    res.status(404).render('404', {message: 'route not found'}));

    module.exports = router;