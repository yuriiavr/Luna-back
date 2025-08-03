const {Schema, model} = require("mongoose");

const articleSchema = new Schema(
  {
    title: String,
    sub: String,
    thumbSrc: String,
    thumbSrcV: String,
    favorite: {
        type: Boolean,
        default: false,
      },
  },
  { versionKey: false, timestamps: true }
)

const Article = model('article', articleSchema)

module.exports = Article;