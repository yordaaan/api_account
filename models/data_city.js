const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    city_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('city', citySchema);