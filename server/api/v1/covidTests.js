const express = require("express");
const Sequelize = require("sequelize");
const { CovidTests, Patients, Cities } = require("../../models");
const covidTestsRouter = express.Router();
const Op = Sequelize.Op;

// GET
covidTestsRouter.get("/", async (req, res, next) => {
  try {
    const allCovidTests = await CovidTests.findAll({
      include: [{ model: Patients }],
    });
    res.json(allCovidTests);
  } catch (err) {
    res.json(err);
  }
});

covidTestsRouter.get("/:covidTestId", async (req, res, next) => {
  try {
    const covidTest = await CovidTests.findOne({
      include: [{ model: Patients }],
      where: { id: req.params.covidTestId },
    });
    res.json(covidTest);
  } catch (err) {
    res.json(err);
  }
});

// POST
covidTestsRouter.post("/", async (req, res, next) => {
  try {
    const { patientId, isSick } = req.body;
    const covidTest = await Cities.create({
      patientId,
      isSick,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json(covidTest);
  } catch (err) {
    res.json(err);
  }
});

// PUT
covidTestsRouter.put("/:covidTestId", async (req, res, next) => {
  try {
    const covidTest = await CovidTests.findByPk(req.params.covidTestId);
    const result = await covidTest.update(req.body);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

// DELETE
covidTestsRouter.delete("/:covidTestId", async (req, res, next) => {
  try {
    const covidTest = await CovidTests.findByPk(req.params.covidTestId);
    await covidTest.destroy();
    res.json({ deleted: true });
  } catch (err) {
    res.json(err);
  }
});

module.exports = covidTestsRouter;
