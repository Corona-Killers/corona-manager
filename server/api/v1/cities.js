const express = require("express");
const Sequelize = require("sequelize");
const { cities, Patients } = require("../../models");
const citiesRouter = express.Router();
const Op = Sequelize.Op;

// GET
citiesRouter.get("/", async (req, res, next) => {
    const allCities = await Cities.findAll({
        include: [{ model: Patients }]
      });
      res.json(allCities);
})
citiesRouter.get("/:cityId", async (req, res, next) => {
    const city = await Cities.findOne({
        include: [{ model: Patients }],
        where: { id: req.params.cityId } 
      });
      res.json(city);
})
citiesRouter.get("/mostsick", async (req, res, next) => {
  const allCities = await Cities.findAll({
      include: [{ model: Patients }]
    });
    // 'sick', 'respiratory', 'recovered', 'dead'
    const citySickPeople = allCities.filter((city) => {
      city.Patients.status === 'sick' || city.Patients.status === 'respiratory' || city.Patients.status === 'recovered' || city.Patients.status === 'dead'
    })
    let sickCounter = 0;
    for (let i = 0; i < citySickPeople.length; i++) {
      if (sickCounter > citySickPeople.Patients.length) {
        sickCounter = citySickPeople.Patients.length;
      }
    }
    const mostSickCity = citySickPeople.filter((city) => city.Patients.length === sickCounter)
    res.json(mostSickCity);
})

// POST
citiesRouter.post("/", async (req, res, next) => {
  const { name, population } = req.body;
  const city = await Cities.create({
    name,
    population,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  res.json(city);
})

// PUT
citiesRouter.put("/:cityId", async (req, res, next) => {
  const city = await Cities.findByPk(req.params.cityId);
  await city.update(req.body);
  res.json(city);
})

// DELETE
citiesRouter.delete("/:cityId", async (req, res, next) => {
  const city = await Cities.findByPk(req.params.cityId);
  await city.destroy();
  res.json({ deleted: true });
})

module.exports = citiesRouter;