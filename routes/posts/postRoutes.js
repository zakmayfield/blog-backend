const route = require('express').Router();
const {
  getPostsByUser,
  createPost,
} = require('../../controllers/postController');

route.get('/:id', getPostsByUser);
route.post('/:id', createPost);

module.exports = route;
