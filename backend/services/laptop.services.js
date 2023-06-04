const Laptop = require("../models/laptops");

async function laptopUpload(params, callback) {

  const user = new Laptop(params);
  user
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getAllLaptops(callback) {
    try {
      const laptops = await Laptop.find({});
      return callback(null, laptops);
    } catch (error) {
      return callback(error);
    }
}

async function deleteLaptopById(laptopId, callback) {
  try {
    const result = await Laptop.findByIdAndDelete(laptopId);
    return callback(null, result);
  } catch (error) {
    return callback(error);
  }
}


module.exports = {
  laptopUpload,
  getAllLaptops,
  deleteLaptopById,
};
