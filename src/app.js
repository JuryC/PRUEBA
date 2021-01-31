const express = require('express');
const app = express();
const path = require('path');
const hotel = require('./data.json');



app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use(require('./routes / index'));
app.get('/', (req, res) => {

    res.render('hotel.ejs', { data: hotel })
});
app.post('/', (req, res) => {
    const { search } = req.body;
    var newArr = hotel.filter(function (el) {

        return el.name.toLowerCase().includes(search.toLowerCase())
    });
    res.render('hotel.ejs', { data: newArr })

})
app.use('/api/hotel', require('./routes/hotel'));

app.use(express.static(path.join(__dirname, 'public')));





module.exports = app;