const express = require('express');
const router = express.Router();

const hotel = require('../data.json');






/* function filterItems(txt) {
    return hotel.filter(function (el) {
        return el.name.toLowerCase().indexOf(txt.toLowerCase());
    })
})*/
module.exports = router;