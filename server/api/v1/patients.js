const express = require("express");
const Sequelize = require("sequelize");
const {
  Patients,
  SymptomsByPatients,
  Cities,
  CovidTests,
  Symptoms,
} = require("../../models");
const patientRouter = express.Router();
const Op = Sequelize.Op;

patientRouter.get("/", async (req, res, next) => {
  try {
    const allPatients = await Patients.findAll({
      include: [
        {
          model: SymptomsByPatients,
          include: [{ model: Symptoms, attributes: ["name"] }],
          attributes: ["id"],
        },
        {
          model: Cities,
          attributes: ["name", "population"],
        },
        {
          model: CovidTests,
        },
      ],
    });
    res.json(allPatients);
  } catch (error) {
    res.send({ error });
  }
});
patientRouter.get("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findOne({
      include: [
        {
          model: SymptomsByPatients,
          include: [{ model: Symptoms, attributes: ["name"] }],
          attributes: ["id"],
        },
        {
          model: Cities,
          attributes: ["name", "population"],
        },
        {
          model: CovidTests,
        },
      ],
      where: { id: req.params.patientId },
    });
    res.json(patient);
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.post("/", async (req, res, next) => {
  try {
    const { name, dateOfBirth, cityId, status, hospitalId } = req.body;
    const patient = await Patients.create({
      name,
      dateOfBirth,
      cityId,
      status,
      hospitalId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json(patient);
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.put("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.update(req.body);
    res.json(patient);
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = patientRouter;

patientRouter.delete("/:patientId", async (req, res, next) => {
  try {
    const patient = await Patients.findByPk(req.params.patientId);
    await patient.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = patientRouter;
