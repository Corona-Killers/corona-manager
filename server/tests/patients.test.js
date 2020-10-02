const request = require('supertest');
const app = require('../app');
const { Patients, CovidTests } = require('../models');

const patientsMock = [
    {
      name: 'test patient1',
      dateOfBitrth: new Date(2001, 4, 5),
      cityId: 2,
      status: 'isolation',
      hospitalId: 1,
    },
    {
      name: 'test patient1',
      dateOfBitrth: new Date(1991, 11, 19),
      cityId: 1,
      status: 'dead',
      hospitalId: 1,
    },
    {
      name: 'test patient1',
      dateOfBitrth: new Date(1987, 2, 22),
      cityId: 1,
      status: 'respiratory',
      hospitalId: 2,
    },
    {
      name: 'test patient1',
      dateOfBitrth: new Date(1953, 5, 15),
      cityId: 2,
      status: 'respiratory',
      hospitalId: 2,
    },
    {
      name: 'test patient1',
      dateOfBitrth: new Date(1989, 1, 30),
      cityId: 2,
      status: 'isolation',
      hospitalId: 2,
    }];

const covidTestMock = [
        {
            patientId:1,
            isSick:true
        },
        {
            patientId:2,
            isSick:false
        },
        {
            patientId:3,
            isSick:true
        },
        {
            patientId:4,
            isSick:false
        },
        {
            patientId:5,
            isSick:true
        }];

const citiesMock = [
    {
        name: Tel-aviv,
        population:15
    },
    {
        name: Haifa,
        population:10
    }];
// const symptomMock = [

// ]

  describe('Patient api tests', () => {
    afterAll(async () => {
        await Patients.destroy({ truncate: true, force: true });
      });

      it('Can add new patients, cities, symptoms and covid tests', async () => {
        patientsMock.forEach( patient => await request(app).post('/api/v1/patient').send(patient));
        covidTestMock.forEach(test => await request(app).post('/api/v1/covidtests').send(test));
        citiesMock.forEach(city => await request(app).post('/api/v1/cities').send(city))
        
            
        });

      it('Can get all the Patients with their cities name, test results, and symptoms', async () => {
          const { body } = await request(app).get('/api/v1/patient');
          expect(body.length).toBe(5);
      })

      it('Can get all the patients that their covid tests results are true', async () => {
        const { body } = await request(app).get('/api/v1/patient/positive');
        expect(body.length).toBe(3);
      });

      it('Can get pateint by id with his city, test result and symptoms', async () => {
          const { body } = await request(app).get('/api/v1/patient/1');
          expect(body.City.name).toBe('Haifa');
          expect(body.CovidTests.isSick).toBe(true);
      })



      it('Can delete a patient by id', async () => {
          await request(app).delete('/api/v1/patient/1');
          const { body } = await request(app).get('/api/v1/patient');
          expect(body.length).toBe(4);
      })
});
