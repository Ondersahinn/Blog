
const mongoose = require("mongoose");

const Article = mongoose.Schema({
  subject: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createDateTime: {
    type: String
  },
  articleImage: {
    type: String
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
});

module.exports.Schema = Article;
module.exports.Model = mongoose.model("article", Article);
// module.exports = mongoose.model('article', Article);
