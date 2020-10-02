const express = require("express");
const Sequelize = require("sequelize");
const { Cities, Patients } = require("../../models");
const citiesRouter = express.Router();
const Op = Sequelize.Op;

// GET
citiesRouter.get("/", async (req, res, next) => {
  try {
    const allCities = await Cities.findAll({
      include: [{ model: Patients }],
    });
    res.json(allCities);
  } catch (err) {
    res.json(err);
  }
});
citiesRouter.get("/mostsick", async (req, res, next) => {
  try {
    const allCities = await Cities.findAll({
      include: [{ model: Patients }],
    });
    const citySickPeople = allCities.map((city) => {
      city.Patients.filter((patient) => {
        patient.status == "sick" ||
          patient.status == "respiratory" ||
          patient.status == "recovered" ||
          patient.status == "dead";
      });
    });

    console.log("-------------------", citySickPeople);

    let sickCounter = 0;
    for (let i = 0; i < citySickPeople.length; i++) {
      if (sickCounter > citySickPeople.Patients.length) {
        sickCounter = citySickPeople.Patients.length;
      }
    }
    const mostSickCity = citySickPeople.filter(
      (city) => city.Patients.length === sickCounter
    );
    res.json(mostSickCity);
  } catch (err) {
    res.json(err);
  }
});

citiesRouter.get("/:cityId", async (req, res, next) => {
  try {
    const city = await Cities.findOne({
      include: [{ model: Patients }],
      where: { id: req.params.cityId },
    });
    res.json(city);
  } catch (err) {
    res.json(err);
  }
});

// POST
citiesRouter.post("/", async (req, res, next) => {
  try {
    const { name, population } = req.body;
    const city = await Cities.create({
      name,
      population,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json(city);
  } catch (err) {
    res.json(err);
  }
});

// PUT
citiesRouter.put("/:cityId", async (req, res, next) => {
  try {
    const city = await Cities.findByPk(req.params.cityId);
    await city.update(req.body);
    res.json(city);
  } catch (err) {
    res.json(err);
  }
});

// DELETE
citiesRouter.delete("/:cityId", async (req, res, next) => {
  try {
    const city = await Cities.findByPk(req.params.cityId);
    await city.destroy();
    res.json({ deleted: true });
  } catch (err) {
    res.json(err);
  }
});

module.exports = citiesRouter;




