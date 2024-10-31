const BlogPost = require('../models/BlogPost');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' }); // 🔴
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' }); // ⚠️
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching post' }); // 🔴
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = new BlogPost(req.body);
    await newPost.save();
    res.status(201).json(newPost); // ✅
  } catch (err) {
    res.status(400).json({ message: 'Error creating post' }); // 🚫
  }
};

exports.updatePost = async (req, res) => {
  try {
    req.body.createdAt = Date.now();
    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' }); // ⚠️
    }
    res.status(200).json(updatedPost); // ✅
  } catch (err) {
    res.status(400).json({ message: 'Error updating post' }); // 🚫
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' }); // ⚠️
    }
    res.status(200).json({ message: 'Post deleted' }); // ✅
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post' }); // 🔴
  }
};
