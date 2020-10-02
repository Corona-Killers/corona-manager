const express = require("express");
const Sequelize = require("sequelize");
const { Patients, Symptoms, Cities, CovidTests } = require("../../models");
const patientRouter = express.Router();
const Op = Sequelize.Op;

patientRouter.get("/", async (req,res,next) => {
    const allPatients = await Patients.findAll({
        include: [{ model: Cities }, { model: CovidTests }]
      });
      res.json(allPatients);
})
patientRouter.get("/:patientId", async (req,res,next) => {
    const patient = await Patients.findOne({ 
        include: [{ model: Symptoms }, { model: Cities }, { model: CovidTests }],
        where: { id: req.params.patientId } 
      });
      res.json(patient);
})

patientRouter.post("/", async (req,res,next) => {
    const { name, dateOfBirth, cityId, status, hospitalId } = req.body;
    const patient = await Patients.create({
    name,
    dateOfBirth,
    cityId,
    status,
    hospitalId,
    createdAt: new Date(),
    updatedAt: new Date()
    })
    res.json(patient);
});

patientRouter.put("/:patientId", async (req,res,next) => {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.update(req.body);
    res.json(patient)
})

patientRouter.delete("/:patientId", async (req,res,next) => {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true })
})

module.exports = patientRouter;