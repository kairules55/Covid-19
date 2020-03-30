const Patient = require("../models/patients");
const Report = require("../models/reports");

class ReportController {
  async createReport(request, response) {
    try {
      const id = request.query.id;
      const report = await Report.create({
        patient: id,
        doctor: request.user.id,
        status: request.body.status,
        date: request.body.date
      });
      return response.json(200, {
        data: {
          report: report
        },
        message: "Report Created"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async allReport(request, response) {
    try {
      const id = request.query.id;
      const patient = await Patient.findById(id);
      if (!patient) {
        return response.json(400, {
          message: "No such patient exist!"
        });
      }
      const reports = await Report.find({
        patient: id
      })
        .populate("patient")
        .populate("doctor");
      return response.json(200, {
        data: {
          reports: reports
        },
        message: "All reports!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async reportByStatus(request, response) {
    try {
      const status = request.query.status;
      const reports = await Report.find({
        status: status
      })
        .populate("patient")
        .populate("doctor");

      return response.json(200, {
        data: {
          reports: reports
        },
        message: "All report with status " + status
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }
}
module.exports = ReportController;
