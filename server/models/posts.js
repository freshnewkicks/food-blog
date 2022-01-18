const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    readTime: {
        type: String,
        required: true
    }
})


const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;