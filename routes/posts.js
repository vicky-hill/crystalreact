const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { protect } = require('../middleware/auth');


/* ===================================
   GET Request
=================================== */

// GET api/posts  [Get all posts from logged in user]
router.get('/', protect, async (req, res) => {
    try {
        const posts = await Word.find({ user: req.user.id}).populate({
            path: 'user',
            select: 'name'
        });
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})

// GET api/posts/:id  [Get a single post]
router.get('/:id', protect, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post) {
            return res.status(404).json({msg: "Post not found"});
        }

        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
});


/* ===================================
   POST Request
=================================== */

// POST api/posts  [Save a new post]
router.post('/', protect, async (req, res) => {
    try {
        const reqPost = {
            title: req.body.title,
            body: req.body.body,
            user: req.user.id
        }

        const newPost = await Post.create(reqPost);

        const post = await Post.findById(newPost._id);

        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
});


/* ===================================
   PUT Request
=================================== */

// PUT api/posts/:id  [Update a post]
router.put('/:id', protect, async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!updatePost) {
            return res.status(404).json({msg: "Post not found"});
        }

        const post = await Post.findById(updatePost._id);

        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})


/* ===================================
   DELETE Request
=================================== */

// DELETE api/words/:id  [Delete a word]
router.delete('/:id', protect, async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if(!post) {
            return res.status(404).json({msg: "Post not found"});
        }
    
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({msg: 'Something went wrong'});
    }
})

module.exports = router;
