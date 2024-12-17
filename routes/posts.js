var express = require("express");
var router = express.Router();
const post = require("../models/post");

/* GET posts listing. */

// get full feed
router.get("/", async (req, res, next) => {
  try{
    const posts = await post.find().sort({created: -1});
   
    res.json(posts);
  }
  catch(e){
    res.status(500)
    res.json({message:"some error occured"})
  }
});

// get all posts by username
router.get("/:username", async (req, res, next) => {
  const out = await post.find({ username: req.params.username });
  if (out.length) {
    res.json({ posts: out });
  } else {
    res.status(400);
  }
});

// add a new post
router.post("/add", async (req, res) => {
  try {
    const { content, author, created } = req.body;
    await post.create({
      content,
      author,
      created,
    });
    res.json({ message: "Post uploaded successfully" });
  } catch (e) {
    res.status(500);
  }
});

module.exports = router;
