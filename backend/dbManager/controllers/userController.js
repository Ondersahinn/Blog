const User = require('../model/userModel');

exports.searchAll = function(req, res) {
  User.find({}, function(err, User) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'User retrieved successfully',
      data: User,
    });
  });
};

exports.searchById = function(req, res) {
  User.findById(req.params.id, function(err, User) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      message: 'User details loading..',
      status: 'success',
      data: User,
    });
  });
};

exports.new = function(req, res) {
  User.insertMany(req.body, function(err, data) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Email already registered',
      });
    } else {
      res.json({
        status: 'success',
        message: 'New User created!',
        data,
      });
    }
  });
};

exports.login = function(req, res) {
  User.find({ email: req.body.email }, function(err, User) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    } else {
      if (User.length > 0) {
        res.json({
          status: 'success',
          message: 'User Logged In',
          data: User[0],
        });
      } else {
        res.json({
          status: 'error',
          message: 'worng email',
          data: {},
        });
      }
    }
  });
};

exports.update = function(req, res) {
  User.updateOne(
    { _id: req.body.params.id },
    req.body.params.data,
    { new: true },
    function(err, User) {
      if (err) {
        res.json({
          status: 'error',
          message: 'Email already registered',
        });
      } else {
        res.json({
          status: 'success',
          message: 'User Info Updated',
          data: User,
        });
      }
    },
  );
};

exports.delete = function(req, res) {
  User.deleteOne(
    {
      _id: req.query.id,
    },
    function(err, User) {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      } else {
        res.json({
          status: 'success',
          message: 'User deleted',
        });
      }
    },
  );
};
