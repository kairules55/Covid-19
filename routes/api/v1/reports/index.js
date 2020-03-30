const express = require("express");
const router = express.Router();
const passport = require("passport");

const ReportController = require("../../../../controllers/ReportController");
const reportController = new ReportController();

router.get("/", passport.authenticate("jwt"), reportController.reportByStatus);

module.exports = router;
