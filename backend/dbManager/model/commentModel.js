
const mongoose = require("mongoose");

const Comments = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  createDateTime: {
    type: String
  },
  reply:{
    type: String,
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "article",
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
});

module.exports.Schema = Comments;
module.exports.Model = mongoose.model("comment", Comments);
// module.exports = mongoose.model('article', Article);
