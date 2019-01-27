var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

var movieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        min: 1,
        max: 60,
        required: [
            true, 'Title is required'
        ]
    },
    releaseYear: {
        type: Date,
        required: [
            true, 'Release Year is required'
        ]
    },
    format: {
        type: String,
        enum: [
            'VHS', 'DVD', 'Blu-Ray'
        ],
    },
    starsList: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Stars'
    }],
    last_updated: Date
});

movieSchema.pre('save', function (next) {
    this.last_updated = Date.now();
    next();
});


movieSchema.index({
    '$**': 'text'
});

movieSchema.plugin(mongoosePaginate);

var Movie = mongoose.model('Movie', movieSchema, 'movie_list');

module.exports = Movie;