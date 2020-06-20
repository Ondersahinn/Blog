const axios = require('axios');
var fs = require('fs');

exports.searchAll = async (req, res) => {
  await axios
    .get('http://localhost:3008/api/v1/user')
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
    .get(`${'http://localhost:3008/api/v1/user'}/${req.params.id}`)
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

exports.login = async (req, res) => {
  await axios
    .post('http://localhost:3008/api/v1/user/login',req.body)
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
    .delete(`${'http://localhost:3008/api/v1/user'}`, {
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
    .post(`${'http://localhost:3008/api/v1/user'}`, req.body)
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
    .put(`${'http://localhost:3008/api/v1/user'}`, {
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

// exports.login = async function(req, res) {
//   await axios
//     .post('http://localhost:3008/api/v1/user/login', req.body)
//     .then(function(response) {
//       const data = {
//         event_type: 'logged in',
//         login_result: response.data.status,
//         time: new Date(),
//         teacher_id: response.data.data._id,
//       };
//       axios.post(`${global.gConfig.DB_MANAGER_ANALYTICS}`, data);
//       res.json({
//         data: response.data.data,
//         message: response.data.message,
//         status: response.data.status,
//       });
//     })
//     .catch(function(response) {
//       const data = {
//         event_type: 'logged in',
//         login_result: response.data.status,
//         time: new Date(),
//         teacher_id: response.data.data._id,
//       };
//       axios.post(`${global.gConfig.DB_MANAGER_ANALYTICS}`, data);
//       res.json({
//         message: response.data.message,
//         status: response.data.status,
//       });
//     });
// };