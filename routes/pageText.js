const router = require('express').Router();
const db = require('../models');

// get text for specified page
router.get('/:page/text', (req, res) => {
    // grab name of page to grab text from
    const { page } = req.params
    // grab page text from db
    db.PageText.find({ page: page }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

// create a new text section in db
router.post('/page/text/new', (req, res) => {
    // create new instance in db
    db.PageText.create(req.body, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

// update text for specified section of a page
router.put('/:page/:section/text', (req, res) => {
    // grab name of page and section to be changed
    const { page, section } = req.params
    // update text in db where page and section match parameters
    db.PageText.updateOne({
        page: page,
        section: section
    }, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

// delete page text from db by id
router.delete('/page/:id', (req, res) => {
    // grab id to delete from url
    const { id } = req.params
    // delete from db
    db.PageText.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

module.exports = router