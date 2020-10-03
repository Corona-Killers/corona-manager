const request = require("supertest");
const app = require("../app");

//model for bulkCreate
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

const {
  Patients,
  CovidTests,
  Symptoms,
  SymptomsByPatients,
  Cities,
  Hospitals
} = require("../models");

//mock data
const patientsMock = require('./mockData/patientMock')
const covidTestMock = require('./mockData/covidTestMock')
const citiesMock = require('./mockData/citiesMock')
const symptomMock = require('./mockData/symptomsMock')
const SymptomsByPatientsMock = require('./mockData/symptomsByPatientMock')
const hospitalsMock = require("./mockData/hospitalsMock");

describe("Patient api tests", () => {

  beforeAll(async () => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    await Patients.destroy({ truncate: true, force: true });
    await CovidTests.destroy({ truncate: true, force: true });
    await Symptoms.destroy({ truncate: true, force: true });
    await SymptomsByPatients.destroy({ truncate: true, force: true });
    await Cities.destroy({ truncate: true, force: true });
  });

  afterAll(async () => {
   app.close()
  })

  it("Can add new patients, cities, symptoms and covid tests", async () => {
    
    const patientsResult = await Patients.bulkCreate(patientsMock)
    expect(patientsResult.length).toBe(5)

    const covidTestResult = await CovidTests.bulkCreate(covidTestMock)
    expect(covidTestResult.length).toBe(5)

    const citiesResult = await Cities.bulkCreate(citiesMock)
    expect(citiesResult.length).toBe(2)

    const symptomsResult = await Symptoms.bulkCreate(symptomMock)
    expect(symptomsResult.length).toBe(3)
    
    const symptomsByPatientsResult = await SymptomsByPatients.bulkCreate(SymptomsByPatientsMock)
    expect(symptomsByPatientsResult.length).toBe(5)
    
    const hospitalsResult = await Hospitals.bulkCreate(hospitalsMock)
    expect(hospitalsResult.length).toBe(2)
  
  });

  it("Can get all the Patients with their cities name, test results, and symptoms", async () => {
    const { body } = await request(app).get("/api/v1/patients").expect(200);
    expect(body.length).toBe(5);
  });

    it('Can get all the patients that their covid tests results are true', async () => {
      const { body } = await request(app).get('/api/v1/patients/positive');
      expect(body.length).toBe(3);
    });

  it("Can get pateint by id with his city, test result and symptoms", async () => {
    const { body } = await request(app).get("/api/v1/patients/2").expect(200);
    console.log(body);
    expect(body.City.name).toBe("Tel-aviv");
    expect(body.CovidTests[0].isSick).toBe(false);
    expect(body.SymptomsByPatients[0].Symptom.name).toBe("Difficulty Breathing");
  });

  it("Can delete a patient by id", async () => {
    await request(app).delete("/api/v1/patients/1");
    const { body } = await request(app).get("/api/v1/patients");
    expect(body.length).toBe(4);
  });
});