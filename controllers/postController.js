const db = require('../db/dbConfig');

const getPostsByUser = async (req, res) => {
  const { id } = req.params;

  const posts = await db('posts')
    .join('users', 'users.id', 'posts.user_id')
    .select('users.username', 'posts.title', 'posts.body', 'posts.createdAt')
    .where('user_id', id);

  res.status(200).json(posts);
};

const createPost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const payload = {
    ...body,
    user_id: id,
  };

  await db('posts').insert(payload);

  res.status(200).json(body);
};

module.exports = {
  getPostsByUser,
  createPost,
};
