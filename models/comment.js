const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    postId :{
        type: String,
        required: true
    },
    content: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now()
    }

})

module.exports = mongoose.model('Comments', commentSchema)