const express = require("express");
const Sequelize = require("sequelize");
const { Hospitals, Patients } = require("../../models");
const hospitalsRouter = express.Router();
const Op = Sequelize.Op;

// GET
hospitalsRouter.get("/", async (req, res, next) => {
    const allHospitals = await Hospitals.findAll({
        include: [{ model: Patients }]
      });
      res.json(allHospitals);
})
hospitalsRouter.get("/:hospitalId", async (req, res, next) => {
    const hospital = await Hospitals.findOne({
        include: [{ model: Patients }],
        where: { id: req.params.hospitalId } 
      });
      res.json(hospital);
})
hospitalsRouter.get("/respirator_luck", async (req, res, next) => {
    const allHospitals = await Hospitals.findAll({
        include: [{ model: Patients }]
      });
      const respiratoryPatients = allHospitals.filter((hospital) => hospital.Patients.status === 'respiratory');
      const respiratorsLackHospitals = respiratoryPatients.filter((hospital) => hospital.respiratorAmount - hospital.Patients > 5);
      res.json(respiratorsLackHospitals);
})


// POST
hospitalsRouter.post("/", async (req, res, next) => {
    const { name, respiratorAmount } = req.body;
    const hospital = await Hospitals.create({
      name,
      respiratorAmount,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.json(hospital);
})

// PUT
hospitalsRouter.put("/:hospitalId", async (req, res, next) => {
    const hospital = await Hospitals.findByPk(req.params.hospitalId);
    await hospital.update(req.body);
    res.json(hospital);
})

// DELETE
hospitalsRouter.delete("/:hospitalId", async (req, res, next) => {
    const hospital = await Hospitals.findByPk(req.params.hospitalId);
    await hospital.destroy();
    res.json({ deleted: true });
})

module.exports = hospitalsRouter;