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
  } catch (error) {
    res.json(error);
  }
});

covidTestsRouter.get("/results/:testResult", async (req, res) => {
  try {
    let countTests = 0
    if(req.params.testResult === "true" || req.params.testResult === "positive") {
       countTests = await CovidTests.findAll({
        attributes:[[Sequelize.fn("COUNT", Sequelize.col("is_sick")), 'count']],
        where: {isSick: {[Op.eq]: 1}} 
      });
    } else {
       countTests = await CovidTests.findAll({
        attributes:[[Sequelize.fn("COUNT", Sequelize.col("is_sick")), 'count']],
        where: {isSick: {[Op.eq]: 0}} 
    });
  }
    console.log(countTests);
    res.json(countTests[0]);
  } catch (error) {
    res.json(error)
  }
})
covidTestsRouter.get("/:covidTestId", async (req, res, next) => {
  try {
    const covidTest = await CovidTests.findOne({
      include: [{ model: Patients }],
      where: { id: req.params.covidTestId },
    });
    res.json(covidTest);
  } catch (error) {
    res.json(error);
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
  } catch (error) {
    res.json(error);
  }
});

// PUT
covidTestsRouter.put("/:covidTestId", async (req, res, next) => {
  try {
    const covidTest = await CovidTests.findByPk(req.params.covidTestId);
    const result = await covidTest.update(req.body);
    res.json(result);
  } catch (error) {
    res.json(error);
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
