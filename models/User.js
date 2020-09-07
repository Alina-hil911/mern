const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        //unique? makes no sense coz there are films with the same titles
    },
    releaseYear : {
        type: Number,
        required: true,
    },
    format : {
        type: String,
        required: true,
    },
    stars : {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('film', FilmSchema);