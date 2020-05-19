const comment = require('../model/commentModel');

exports.searchAll = (req, res) => {
    comment.Model.find()
    .populate('ownerId')
    .populate('articleId')
      .then(comment => {
        res.json({
          status: 'success',
          message: 'Comment retrieved successfully',
          data: comment,
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
    comment.Model.find({ _id: req.params.id })
      .populate('ownerId')
      .populate('articleId')
      .then(comment => {
        res.json({
          status: 'success',
          message: 'Comment retrieved successfully',
          data: comment,
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
    comment.Model.deleteOne(
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
            message: 'Comment deleted',
            status: 'success',
          });
        }
      },
    );
  };
  
  exports.new = function(req, res) {
    comment.Model.insertMany(req.body, function(err, data) {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      } else {
        res.json({
          status: 'success',
          message: 'Comment Created',
          data,
        });
      }
    });
  };
  
  exports.update = function(req, res) {
    comment.Model.updateOne(
      { _id: req.body.params.id },
      req.body.params.data,
      { new: true },
      function(err, comment) {
        if (err) {
          res.json({
            status: 'error',
            message: err,
          });
        } else {
          res.json({
            message: 'Comment Updated',
            data: comment,
            status: 'success',
          });
        }
      },
    );
  };
  