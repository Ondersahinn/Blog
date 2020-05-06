const Article = require('../model/articleModel');

exports.searchAll = (req, res) => {
    Article.Model.find()
    .populate('ownerId')
      .then(Article => {
        res.json({
          status: 'success',
          message: 'Articles retrieved successfully',
          data: Article,
        });
      })
      .catch(err => {
        res.json({
          status: 'error',
          message: err,
        });
      });
  };


  
exports.searchById = (req, res) => {
    Article.Model.find({ _id: req.params.id })
      .populate('ownerId')
      .then(Article => {
        res.json({
          status: 'success',
          message: 'Articles retrieved successfully',
          data: Article,
        });
      })
      .catch(err => {
        res.json({
          status: 'error',
          message: err,
        });
      });
  };
  
  exports.delete = function(req, res) {
    Article.Model.deleteOne(
      {
        _id: req.query.id,
      },
      function(err) {
        if (err) {
          res.json({
            status: 'error',
            message: err,
          });
        } else {
          res.json({
            message: 'Article deleted',
            status: 'success',
          });
        }
      },
    );
  };
  
  exports.new = function(req, res) {
    Article.Model.insertMany(req.body, function(err, data) {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      } else {
        res.json({
          status: 'success',
          message: 'Article Created',
          data,
        });
      }
    });
  };
  
  exports.update = function(req, res) {
    Article.Model.updateOne(
      { _id: req.body.params.id },
      req.body.params.data,
      { new: true },
      function(err, Article) {
        if (err) {
          res.json({
            status: 'error',
            message: err,
          });
        } else {
          res.json({
            message: 'Article Updated',
            data: Article,
            status: 'success',
          });
        }
      },
    );
  };
  