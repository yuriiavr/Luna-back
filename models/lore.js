const {Schema, model} = require("mongoose");

const loreSchema = new Schema(
  {
    title: String,
    sub: String,
    thumbSrc: String,
    char: String,
    favorite: {
        type: Boolean,
        default: false,
      },
  },
  { versionKey: false, timestamps: true }
)

const Lore = model('lore', loreSchema)

module.exports = Lore;