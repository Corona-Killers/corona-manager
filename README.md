# Corona Manager Challenge

## Welcome To The Challenge!
We need your help to beat the covid pandemic !! \
this challenge will test your Back-End skills. you are required to use express.js and sequelize to analyze data from the given data base.


## Table Of Contents

* [Tasks](#Tasks) 
* [Rest API](#Rest-API)

## Tasks
- Create an express server that will analyze details from the data base and display it to the client.
- Build [Rest-API](#Rest-API) for each model in the data base.
- Pass all the tests.
- Use the Sequelize Paranoid when patient recovered or dead.
(first change their status and then delete them)
- Use underscore in DB in all the models. In node it should perform in camelCase. 
Hint: ("define": {"underscored": true})


## Database Requirements(the test checks that)
### Database
- SQL only!
- Use Sequelize
- Database name has to be called - "covid_19"

### Patients Table
- Columns: id, dateOfBirth, cityId, name, symptom, status('sick', 'respiratory', 'recovered', 'dead', 'isolation'), hospitalId.
### Cities Table
- Columns: id, name, population.
### Hospitals Table
- Columns: id, name, respiratorAmount, maxCapacity. 
### Symptompes Table
- Columns: id, name
### CovidTests Table
- Columns: id, patientId, isSick(boolean).


## Rest API Requirements
### GET Methods
#### Patients
- GET all patients with their city, symptoms, covid test and status. 
- GET patient by id with their city, symptoms, covid test and status.
- GET all patients with covid Tests that are positive.
- GET all patients by symptom.
#### Hospitals
- GET all hospitals with their capacity (maxCapacity), number of respirator (respiratorAmount)
- GET Hospital by id.
- GET all the hospitals that need to bring more respirator machines (less than five machines that are available in the hospital).
#### Cities
- GET all cities number of sick people in every hospital in the city.
- GET city by id with its number of patients.
- GET the city with the most patients (regardless of their state) as an array as there can be several cities at the top.
#### Symptoms
- GET all symptoms.
- GET symptom by id.
#### Covid Tests
- GET The amount of covid test by result(positive/negative).
- GET all covid test by patient id.
### POST Methods
- POST a new patient with new CovidTests and thier new symptom
- POST a new symptom for patient.

### PUT Methods
- PUT a new patient.
- PUT a new symptom.
- PUT a new symptom for patient.
- PUT a CovidTests for patient.
- PUT update a city name or population.

### DELETE Methods
- DELETE a patient.
- DELETE a symptom.
- DELETE a hospital.
- DELETE a city.
- DELETE a covid test.

## Good Luck!