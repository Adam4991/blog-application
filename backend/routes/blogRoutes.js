const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/getAllPosts', blogController.getAllPosts);

router.get('/getPostById/:id', blogController.getPostById);

router.post('/createPost', blogController.createPost);

router.put('/updatePost/:id', blogController.updatePost);

router.delete('/deletePost/:id', blogController.deletePost);

module.exports = router;
