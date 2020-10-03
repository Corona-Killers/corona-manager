const express = require("express");
const Sequelize = require("sequelize");
const { Symptoms, Patients, SymptomsByPatients } = require("../../models");
const symptomsByPatientRouter = express.Router();
const Op = Sequelize.Op;

symptomsByPatientRouter.post("/", async (req, res) => {
  try {
    const newconnection = await SymptomsByPatients.create(req.body);
    res.json(newconnection);
  } catch (err) {
    res.json({ err });
  }
});

symptomsByPatientRouter.delete("/:patientId", async (req, res) => {
  try {
    const deleted = await SymptomsByPatients.destroy({
      where: {
        id: [req.params.id],
      },
    });
    res.json({ deleted: true });
  } catch (err) {
    res.json({ err });
  }
});

module.exports = symptomsByPatientRouter;
