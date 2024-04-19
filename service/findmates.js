const Advertisement = require("../models/findmates");

const listAdvertisements = () => {
  return Advertisement.find();
};

const addAdvertisement = (body, owner) => {
  return Advertisement.create({ ...body, owner });
};

const getAdvertisementById = (id) => {
  return Advertisement.findById(id);
};

const removeAdvertisement = (id) => {
  return Advertisement.findByIdAndRemove({ _id: id });
};

const editAdvertisement = (id, fields) => {
  return Advertisement.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

console.log(Advertisement);

module.exports = {
  listAdvertisements,
  addAdvertisement,
  getAdvertisementById,
  removeAdvertisement,
  editAdvertisement,
};
