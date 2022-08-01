const router = require('express').Router()

router.get('/places', (req, res) => {
    res.send('GET /places')
})

module.exports = router

