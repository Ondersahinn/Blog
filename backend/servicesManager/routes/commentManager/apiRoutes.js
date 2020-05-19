let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: 'API its Working',
    message: 'Welcome to SocialBlog ARTICLE Microservice!'
  });
});

var CommentController = require('./controllers/commentController');

router
  .route('/comment')
  .get(CommentController.searchAll)
  .post(CommentController.new);
router
  .route('/comment/:id')
  .delete(CommentController.delete)
  .put(CommentController.update)
  .get(CommentController.searchById);

router
  .route('/db/comment')
  .get(CommentController.searchAll)
  .post(CommentController.new);
router
  .route('/db/article/:id')
  .delete(CommentController.delete)
  .put(CommentController.update)
  .get(CommentController.searchById);
  
module.exports = router;
