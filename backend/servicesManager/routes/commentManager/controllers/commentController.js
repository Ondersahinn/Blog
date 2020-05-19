const axios = require('axios');

exports.searchAll = async (req, res) => {
  await axios
    .get('http://localhost:3008/api/v1/comment')
    .then(function (response) {
      res.json({
        data: response.data.data,
        message: response.data.message,
        status: response.data.status,
      });
    })
    .catch(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
      });
    });
};

exports.searchById = async (req, res) => {
  await axios
    .get(`${'http://localhost:3008/api/v1/comment'}/${req.params.id}`)
    .then(function (response) {
      res.json({
        data: response.data.data,
        message: response.data.message,
        status: response.data.status,
      });
    })
    .catch(function (response) {
      res.json({
        message: response.data,
        status: response.data,
      });
    });
};

exports.delete = async function (req, res) {
  await axios
    .delete(`${'http://localhost:3008/api/v1/comment'}`, {
      params: { id: req.params.id },
    })
    .then(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
      });
    })
    .catch(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
      });
    });
};

exports.new = async function (req, res) {
  await axios
    .post(`${'http://localhost:3008/api/v1/comment'}`, req.body)
    .then(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
        data: response.data.data,
      });
    })
    .catch(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
      });
    });
};

exports.update = async function (req, res) {
  await axios
    .put(`${'http://localhost:3008/api/v1/comment'}`, {
      params: { data: req.body, id: req.params.id },
    })
    .then(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
        data: response.data.data,
      });
    })
    .catch(function (response) {
      res.json({
        message: response.data.message,
        status: response.data.status,
      });
    });
};
