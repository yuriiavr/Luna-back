const { Schema, model } = require("mongoose");
const handleSaveErrors = require("../helpers/handleSaveErrors");


const advertisementSchema = new Schema(
  {
    queue: String,
    line: String,
    server: String,
    rank: String,
    ign: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

advertisementSchema.post("save", handleSaveErrors);

const Advertisement = model("advertisement", advertisementSchema);

module.exports = Advertisement;
