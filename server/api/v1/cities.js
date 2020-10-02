const express = require("express");
const Sequelize = require("sequelize");
const { cities, Patients } = require("../../models");
const citiesRouter = express.Router();
const Op = Sequelize.Op;

citiesRouter.get("/", async (req,res,next) => {
    const allCities = await cities.findAll({
        include: [{ model: Patients }]
      });
      res.json(allCities);
})

citiesRouter.post("/", async (req,res,next) => {
  const { name, population } = req.body;
  const city = await Cities.create({
    name,
    population,
    createdAt: new Date(),
    updatedAt: new Date()
  })
})

citiesRouter.put("/:cityId", async (req,res,next) => {
  const city = await Cities.findByPk(req.params.cityId);
  await city.update(req.body);
  res.json(city)
})

citiesRouter.delete("/:cityId", async (req,res,next) => {
  const city = await Cities.findByPk(req.params.cityId);
  await city.destroy();
  res.json({ deleted: true })
})