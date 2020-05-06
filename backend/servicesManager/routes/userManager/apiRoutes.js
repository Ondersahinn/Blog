let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: 'API its Working',
    message: 'Welcome to SocialBlog ARTICLE Microservice!'
  });
});

var userController = require('./controllers/userController');

router
  .route('/user')
  .get(userController.searchAll)
  .post(userController.new);
router
  .route('/user/:id')
  .delete(userController.delete)
  .put(userController.update)
  .get(userController.searchById);

router
  .route('/user/login')
  .post(userController.login)
  
module.exports = router;
