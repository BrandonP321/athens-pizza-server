const router = require('express').Router();
const db = require('../models');

router.get('/', function(req, res) {
    res.send('hi').end()
})

module.exports = router;