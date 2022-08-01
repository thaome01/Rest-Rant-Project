const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router

