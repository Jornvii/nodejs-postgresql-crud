const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); //userController
const postController = require('../controllers/postController'); //postController
const bakeryController = require('../controllers/bakeryController'); //bakeryController
// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.login);

// Post routes
router.post('/users/:userId/posts', postController.createPost);
router.get('/users/:userId/posts', postController.getUserPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);


// Bakery routes
router.post('/bakeries', bakeryController.createBakery);
router.get('/bakeries', bakeryController.getBakeries);
router.get('/bakeries/:id', bakeryController.getBakeryById);
router.put('/bakeries/:id', bakeryController.updateBakery);
router.delete('/bakeries/:id', bakeryController.deleteBakery);

module.exports = router;