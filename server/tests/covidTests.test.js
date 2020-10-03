const request = require("supertest");
const app = require("../app");

//model for bulkCreate
require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const {
  Patients,
  CovidTests,
  Symptoms,
  SymptomsByPatients,
  Cities,
  Hospitals,
} = require("../models");

//mock data
const patientsMock = require("./mockData/patientMock");
const covidTestMock = require("./mockData/covidTestMock");
const citiesMock = require("./mockData/citiesMock");
const symptomMock = require("./mockData/symptomsMock");
const SymptomsByPatientsMock = require("./mockData/symptomsByPatientMock");
const hospitalsMock = require("./mockData/hospitalsMock");

describe("Patient api tests", () => {
  beforeAll(async () => {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    await Patients.destroy({ truncate: true, force: true });
    await CovidTests.destroy({ truncate: true, force: true });
    await Symptoms.destroy({ truncate: true, force: true });
    await SymptomsByPatients.destroy({ truncate: true, force: true });
    await Cities.destroy({ truncate: true, force: true });
    await Hospitals.destroy({ truncate: true, force: true }); 
  });

  afterAll(async () => {
    app.close();
  });

  it("Can add new patients, cities, symptoms, hospitals and covid tests", async () => {
    const patientsResult = await Patients.bulkCreate(patientsMock);
    expect(patientsResult.length).toBe(5);

    const covidTestResult = await CovidTests.bulkCreate(covidTestMock);
    expect(covidTestResult.length).toBe(5);

    const citiesResult = await Cities.bulkCreate(citiesMock);
    expect(citiesResult.length).toBe(2);

    const symptomsResult = await Symptoms.bulkCreate(symptomMock);
    expect(symptomsResult.length).toBe(3);

    const symptomsByPatientsResult = await SymptomsByPatients.bulkCreate(SymptomsByPatientsMock);
    expect(symptomsByPatientsResult.length).toBe(5);

    const hospitalsResult = await Hospitals.bulkCreate(hospitalsMock);
    expect(hospitalsResult.length).toBe(2);
  });

it("Count all the covid tests by results", async () => {
const { body : positiveTests} = await request(app).get("/api/v1/covidtests/results/positive").expect(200);
console.log(positiveTests);
const { body : negativeTests}  = await request(app).get("/api/v1/covidtests/results/negative").expect(200);
console.log(negativeTests);
expect(positiveTests.count + negativeTests.count).toBe(covidTestMock.length);
});

});