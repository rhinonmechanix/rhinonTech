const laptopServices = require("../services/laptop.services");

/**
 * 1. To secure the password, we are using the bcryptjs, It stores the hashed password in the database.
 * 2. In the SignIn API, we are checking whether the assigned and retrieved passwords are the same or not using the bcrypt.compare() method.
 * 3. In the SignIn API, we set the JWT token expiration time. Token will be expired within the defined duration.
 */

exports.createLaptop = (req, res, next) => {
    laptopServices.laptopUpload(req.body, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.getAllLaptops = (req, res, next) => {
    laptopServices.getAllLaptops((error, laptops) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: laptops,
      });
  });
};

exports.getLaptopById = (req, res, next) => {
  const { id } = req.params;
  
  laptopServices.getLaptopById(id, (error, laptop) => {
    if (error) {
      return next(error);
    }
    if (!laptop) {
      return res.status(404).send({
        message: 'Laptop not found',
      });
    }
    return res.status(200).send({
      message: 'Success',
      data: laptop,
    });
  });
};

exports.deleteLaptopById = (req, res, next) => {
  const laptopId = req.params.id;
  laptopServices.deleteLaptopById(laptopId, (error, result) => {
    if (error) {
      return next(error);
    }
    if (!result) {
      return res.status(404).send({
        message: "Laptop not found",
      });
    }
    return res.status(200).send({
      message: "Success",
    });
  });
};

exports.updateLaptop = (req, res, next) => {
  const { id } = req.params;
  const params = req.body;
  
  laptopServices.laptopUpdate(id, params, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: 'Success',
      data: results,
    });
  });
};

// exports.otpLogin = (req, res, next) => {
//   userServices.createNewOTP(req.body, (error, results) => {
//     if (error) {
//       return next(error);
//     }
//     return res.status(200).send({
//       message: "Success",
//       data: results,
//     });
//   });
// };

// exports.verifyOTP = (req, res, next) => {
//   userServices.verifyOTP(req.body, (error, results) => {
//     if (error) {
//       return next(error);
//     }
//     return res.status(200).send({
//       message: "Success",
//       data: results,
//     });
//   });
// };
