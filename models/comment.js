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
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Comments', commentSchema)