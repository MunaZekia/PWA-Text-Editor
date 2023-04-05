const { Post } = require('../models');
const { populate } = require('../models/Post');

module.exports = {
  getPosts(req, res) {
    Post.find()
      .then((posts) => res.json(posts))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId })
           .populate('tags')
           // this is the name of the field in the Post model
           // that we want to populate
          
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createPost(req, res) {
    Post.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },
};
