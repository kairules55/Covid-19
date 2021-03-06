const express = require("express");
const router = express.Router();
const passport = require("passport");

const ReportController = require("../../../../controllers/ReportController");
const reportController = new ReportController();
router.put(
  "/create_report/",
  passport.authenticate("jwt", { session: false }),
  reportController.createReport
);

router.get("/all_reports/",reportController.allReport);

module.exports = router;
