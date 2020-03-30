const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");

class DoctorController {
  async register(request, response) {
    try {
      let doctor = await Doctor.findOne({ username: request.body.username });
      if (doctor) {
        return response.json(400, {
          message: "Bad Request"
        });
      }

      doctor = await Doctor.create(request.body);
      return response.json(200, {
        data: {
          doctor: doctor
        },
        message: "Doctor created!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error " + error
      });
    }
  }

  async login(request, response) {
    try {
      let doctor = await Doctor.findOne({ username: request.body.username });
      if (!doctor || doctor.password != request.body.password) {
        return response.json(422, {
          message: "Invalid username or password"
        });
      }
      return response.json(200, {
        data: {
          doctor: doctor,
          token: jwt.sign(doctor.toJSON(), "covid-19", {
            expiresIn: "10000000"
          })
        },
        message: "Success!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error " + error
      });
    }
  }
}

module.exports = DoctorController;
