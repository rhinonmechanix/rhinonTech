const usersController = require("../controllers/user.controller");
const laptopController = require("../controllers/laptop.controller");

const express = require("express");
const router = express.Router();

// user upload
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/user-Profile", usersController.userProfile);


// laptop upload
router.post("/laptop", laptopController.createLaptop);
router.get("/laptop", laptopController.getAllLaptops);
router.get("/laptops/:id", laptopController.getLaptopById);
router.delete("/laptops/:id", laptopController.deleteLaptopById);
router.put('/laptops/:id', laptopController.updateLaptop);

module.exports = router;