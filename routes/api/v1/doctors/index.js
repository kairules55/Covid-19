const express = require("express");
const router = express.Router();
const passport = require("passport");

const DoctorController = require("../../../../controllers/DoctorController");
const doctorController = new DoctorController();

router.post("/register/", doctorController.register);
router.post("/login/", doctorController.login);

module.exports = router; 
