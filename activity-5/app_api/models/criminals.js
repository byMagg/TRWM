const mongoose = require('mongoose');

const criminalSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    nationality: String,
    aliases: [String],
    files: [{
        name: String,
        url: String
    }],
});

mongoose.model('Criminal', criminalSchema);