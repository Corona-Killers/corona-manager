const express = require("express");
const Sequelize = require("sequelize");
const { CovidTests, Patients } = require("../../models");
const covidTestsRouter = express.Router();
const Op = Sequelize.Op;

// GET
covidTestsRouter.get("/", async (req, res, next) => {
    const allCovidTests = await CovidTests.findAll({
        include: [{ model: Patients }]
      });
      res.json(allCovidTests);
})
covidTestsRouter.get("/:covidTestId", async (req, res, next) => {
    const covidTest = await CovidTests.findOne({
        include: [{ model: Patients }],
        where: { id: req.params.covidTestId } 
      });
      res.json(covidTest);
})

// POST
covidTestsRouter.post("/", async (req, res, next) => {
  const { patientId, isSick } = req.body;
  const covidTest = await Cities.create({
    patientId,
    isSick,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  res.json(covidTest);
})

// PUT
covidTestsRouter.put("/:covidTestId", async (req, res, next) => {
  const covidTest = await CovidTests.findByPk(req.params.covidTestId);
  await covidTest.update(req.body);
  res.json(covidTest);
})

// DELETE
covidTestsRouter.delete("/:covidTestId", async (req, res, next) => {
  const covidTest = await CovidTests.findByPk(req.params.covidTestId);
  await covidTest.destroy();
  res.json({ deleted: true });
})

module.exports = covidTestsRouter