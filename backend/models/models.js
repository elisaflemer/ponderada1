const mongoose = require('mongoose');

const kudoSchema = mongoose.Schema({
}, {
    timestamps: true
})

module.exports = mongoose.model('Kudo', kudoSchema);