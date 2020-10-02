const request = require("supertest");
const app = require("../app");
const {
  Patients,
  CovidTests,
  Symptoms,
  SymptomsByPatients,
  Cities,
} = require("../models");
// const { patientsMock, covidTestMock, citiesMock, symptomMock, SymptomsByPatientsMock } = require('./mockData');

const patientsMock = [
  {
    name: "patient1",
    dateOfBirth: "2001/04/05",
    cityId: 2,
    status: "isolation",
    hospitalId: 1,
  },
  {
    name: "patient2",
    dateOfBirth: "1991/01/19",
    cityId: 1,
    status: "dead",
    hospitalId: 1,
  },
  {
    name: "patient3",
    dateOfBirth: "1987/02/22",
    cityId: 1,
    status: "respiratory",
    hospitalId: 2,
  },
  {
    name: "patient4",
    dateOfBirth: "1953/05/15",
    cityId: 2,
    status: "respiratory",
    hospitalId: 2,
  },
  {
    name: "patient5",
    dateOfBitrth: "1989/01/30",
    cityId: 2,
    status: "isolation",
    hospitalId: 2,
  },
];

const covidTestMock = [
  {
    patientId: 1,
    isSick: true,
  },
  {
    patientId: 2,
    isSick: false,
  },
  {
    patientId: 3,
    isSick: true,
  },
  {
    patientId: 4,
    isSick: false,
  },
  {
    patientId: 5,
    isSick: true,
  },
];
citiesMock = [
  {
    name: "Tel-aviv",
    population: 15,
  },
  {
    name: "Haifa",
    population: 10,
  },
];

const symptomMock = [
  {
    name: "Difficulty Breathing",
  },
  {
    name: "Dizziness",
  },
  {
    name: "Headache",
  },
];

const SymptomsByPatientsMock = [
  {
    symptomId: 1,
    patientId: 1,
  },
  {
    symptomId: 1,
    patientId: 2,
  },
  {
    symptomId: 2,
    patientId: 3,
  },
  {
    symptomId: 1,
    patientId: 4,
  },
  {
    symptomId: 2,
    patientId: 5,
  },
];

const HospitalsMock = [
  {
    name: "Rambam",
    respiratorAmount: 7,
    maxCapacity: 20,
  },
  {
    name: "Tel Hashomer",
    respiratorAmount: 10,
    maxCapacity: 15,
  },
];

describe("Patient api tests", () => {

  // beforeAll(async () => {
  //   console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  //   // await Patients.destroy({ truncate: true, force: true });
  //   // await CovidTests.destroy({ truncate: true, force: true });
  //   // await Symptoms.destroy({ truncate: true, force: true });
  //   // await SymptomsByPatients.destroy({ truncate: true, force: true });
  //   // await Cities.destroy({ truncate: true, force: true });
  // });

  // afterAll(async () => {
  //  app.close()
  // })

  it("Can add new patients, cities, symptoms and covid tests", async () => {
        const { body: aaa } = await request(app)
        .get("/api/v1/patient")
        .send({
          name: "patient1",
          dateOfBirth: "2001/04/05",
          cityId: 2,
          status: "isolation",
          hospitalId: 1,
        }).expect(200)

        console.log(aaa);
    // covidTestMock.forEach(
    //   async (test) =>
    //     await request(app).post("/api/v1/covidtests").send(test).expect(200)
    // );
    // citiesMock.forEach(
    //   async (city) =>
    //     await request(app).post("/api/v1/cities").send(city).expect(200)
    // );
    // symptomMock.forEach(
    //   async (symptom) =>
    //     await request(app).post("/api/v1/symptoms").send(symptom).expect(200)
    // );
    // SymptomsByPatientsMock.forEach(
    //   async (symptomByPatient) =>
    //     await request(app)
    //       .post("/api/v1/symptomsByPatient")
    //       .send(symptomByPatient).expect(200)
    // );
  });

  // it("Can get all the Patients with their cities name, test results, and symptoms", async () => {
  //   const { body } = await request(app).get("/api/v1/patients").expect(200);
  //   expect(body.length).toBe(5);
  // });

  //   it('Can get all the patients that their covid tests results are true', async () => {
  //     const { body } = await request(app).get('/api/v1/patient/positive');
  //     expect(body.length).toBe(3);
  //   });

  // it("Can get pateint by id with his city, test result and symptoms", async () => {
  //   const { body } = await request(app).get("/api/v1/patient/1").expect(200);
  //   console.log(body);
  //   expect(body.City.name).toBe("Haifa");
  //   expect(body.CovidTests.isSick).toBe(true);
  //   expect(body.Symptoms.isSick).toBe(true);
  //   expect(body.SymptomsByPatients[0].Symptom.name).toBe(
  //     "Difficulty Breathing"
  //   );
  // });

  // it("Can delete a patient by id", async () => {
  //   await request(app).delete("/api/v1/patient/1");
  //   const { body } = await request(app).get("/api/v1/patient");
  //   expect(body.length).toBe(4);
  // });
});
