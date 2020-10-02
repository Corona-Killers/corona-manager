const express = require("express");
const Sequelize = require("sequelize");
const { Symptoms, Patients } = require("../../models");
const symptomsRouter = express.Router();
const Op = Sequelize.Op;

// GET
symptomsRouter.get("/", async (req,res,next) => {
    const allSymptoms = await Symptoms.findAll({
        include: [{ model: Patients }]
      });
      res.json(allSymptoms);
})
symptomsRouter.get("/:symptomId", async (req, res, next) => {
    const symptom = await Symptoms.findOne({
        include: [{ model: Patients }],
        where: { id: req.params.symptomId } 
      });
      res.json(symptom);
})

// POST
symptomsRouter.post("/", async (req,res,next) => {
    const { name } = req.body;
    const symptom = await Symptoms.create({
    name,
    createdAt: new Date(),
    updatedAt: new Date()
    })
    res.json(symptom);
})

// PUT
symptomsRouter.put("/:symptomId", async (req,res,next) => {
    const symptom = await Symptoms.findByPk(req.params.symptomId);
    await symptom.update(req.body);
    res.json(symptom)
})

// DELETE
symptomsRouter.delete("/:symptomId", async (req,res,next) => {
    const symptom = await Symptoms.findByPk(req.params.symptomId);
    await symptom.destroy();
    res.json({ deleted: true })
})

module.exports = symptomsRouter