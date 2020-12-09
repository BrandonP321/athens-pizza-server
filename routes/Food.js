const router = require('express').Router();
const db = require('../models');

// get all food
router.get('/food', function (req, res) {
    // grab all food from db
    db.Food.find({}, (err, data) => {
        // send food data to client
        res.json(data).end()
    })
})

// create a new food instance
router.post('/food', function (req, res) {
    // create new instance in the db for the new food
    db.Food.create(req.body, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data).end()
        }
    })
})

// update food
router.put('/food/:id', (req, res) => {
    const { id } = req.params

    // update food in db
    db.Food.updateOne({ _id: id }, { $set: req.body }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data).end()
        }
    })
})

// delete a food
router.delete('/food/:id', function (req, res) {
    const { id } = req.params
    // delete from db
    db.Food.remove({ _id: id}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;