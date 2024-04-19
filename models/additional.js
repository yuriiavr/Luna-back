const {Schema, model} = require("mongoose");

const additionalSchema = new Schema(
  {
    title: String,
    sub: String,
    thumbSrc: String,
    favorite: {
        type: Boolean,
        default: false,
      },
  },
  { versionKey: false, timestamps: true }
)

const Additional = model('additional', additionalSchema)

module.exports = Additional;