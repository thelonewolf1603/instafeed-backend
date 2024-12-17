const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: {
        type: String
    },
    author: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Posts', postSchema)