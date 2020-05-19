let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: 'API its Working',
    message: 'Welcome to SocialBlog  Microservice!',
  });
});


const ArticleController = require('../controllers/articleController');
const UserController = require('../controllers/userController');
const CommentController = require('../controllers/commentController');

router
  .route('/article')
  .post(ArticleController.new)
  .delete(ArticleController.delete)
  .get(ArticleController.searchAll)
  .put(ArticleController.update);
router.route('/article/:id').get(ArticleController.searchById);

router
  .route('/user')
  .get(UserController.searchAll)
  .post(UserController.new)
  .put(UserController.update)
  .delete(UserController.delete);

router.route('/user/:id').get(UserController.searchById);
router.route('/user/login').post(UserController.login);

router
  .route('/comment')
  .post(CommentController.new)
  .delete(CommentController.delete)
  .get(CommentController.searchAll)
  .put(CommentController.update);
router.route('/comment/:id').get(CommentController.searchById);

module.exports = router;

