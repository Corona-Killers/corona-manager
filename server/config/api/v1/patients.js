const express = require("express");
const Sequelize = require("sequelize");
const {  } = require("../../models");
const patientRouter = express.Router();
const Op = Sequelize.Op;

patientRouter.get("/", async (req,res,next) => {
    
})