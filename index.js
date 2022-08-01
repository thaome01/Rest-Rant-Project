require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))

//home//
app.get('/', (req, res) => {
    res.render('home')
})

//GET places//
app.get('/places', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/dine-in.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bubble-tea.jpg'
    }]

    res.render('places/index', { places })

})

//error404//
app.get('*', (req, res) => {
    res.render('error404')
})



app.listen(process.env.PORT)


