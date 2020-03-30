const Patient = require("../models/patients");

class PatientController {
  async registerPatient(request, response) {
    try {
      let patient = await Patient.findOne({ phoneNo: request.body.phoneNo });
      if (patient) {
        return response.json(200, {
          data: {
            patient: patient
          },
          message: "Patient Already Exists!"
        });
      }
      patient = await Patient.create({
        phoneNo: request.body.phoneNo
      });
      return response.json(200, {
        data: {
          patient: patient
        },
        message: "Patient Created!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }
}

module.exports = PatientController;
