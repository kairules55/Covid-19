const express = require("express");
const router = express.Router();
const passport = require("passport");

const PatientController = require("../../../controllers/PatientController");
const patientController = new PatientController();

router.use("/doctors/", require("./doctors"));
router.use("/patients/", require("./patients"));
router.use("/reports/", require("./reports"));
router.post("/register_patient", patientController.registerPatient);

module.exports = router;
