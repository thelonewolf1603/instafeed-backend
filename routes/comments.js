var express = require('express');
var router = express.Router();
const comment = require('../models/comment')


/* GET comments listing. */
router.get('/:postId', async (req, res, next) => {
    const commments = await comment.find({postId: postId})
    res.json({comments: commments})
});

module.exports = router;
