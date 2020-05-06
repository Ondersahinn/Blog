let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: 'API its Working',
    message: 'Welcome to SocialBlog ARTICLE Microservice!'
  });
});

var ArticleController = require('./controllers/articleController');

router
  .route('/article')
  .get(ArticleController.searchAll)
  .post(ArticleController.new);
router
  .route('/article/:id')
  .delete(ArticleController.delete)
  .put(ArticleController.update)
  .get(ArticleController.searchById);

router
  .route('/db/article')
  .get(ArticleController.searchAll)
  .post(ArticleController.new);
router
  .route('/db/article/:id')
  .delete(ArticleController.delete)
  .put(ArticleController.update)
  .get(ArticleController.searchById);
  
module.exports = router;
