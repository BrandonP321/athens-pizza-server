const router = require('express').Router();
const db = require('../models');

router.get('/food', function (req, res) {
    // grab all food from db
    db.Food.find({}, (err, data) => {
        // send food data to client
        res.json(data)
    })
})

router.post('/food', function (req, res) {
    // create new instance in the db for the new food
    db.Food.create(req.body, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;