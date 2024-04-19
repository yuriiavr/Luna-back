const {Schema, model} = require("mongoose");

const cyberSchema = new Schema(
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

const Cyber = model('cyber', cyberSchema)

module.exports = Cyber;