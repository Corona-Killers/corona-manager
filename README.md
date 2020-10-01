# Corona Manager Challenge

## Welcome To The Challenge!
We need your help to beat the covid pandemic !! \
this challenge will test your back end skills. you are required to use express and sequelize to analyze data from the given data base.


## Table Of Contents

* [Tasks](#Tasks) 
* [Rest API](#Rest-API)

## Tasks
- Create an express server that will communicate with the data base through some api.
- Build [Rest](#Rest-API) for each model in the data base.
- Pass all tests.
- Use the Sequelize Paranoid.

## Database Requirements
### Database
- SQL only!
- Use Sequelize
- Database name has to be called - "covid_19"

### Patients Table
- Columns: id, name, symptom, city_id, status, hospital_id
### Cities Table
- Columns: id, name, population
### Hospitals Table
- Columns: id, name, respirator_amount
### Patients Table
- Columns: 
### Symptompes_by_patiens Table
- Columns: patient_id, symptom_id
### Symptompes Table
- Columns: id, name
### Covid_test Table
- Columns: id, patient_id, is_sick


## Rest API
### GET Methods
- GET all patients.
- GET all patients by symptom id.
- GET patient by id covid 19 challenge.
- GET patient by id.
- 
### POST Methods
- POST a new patient.
- POST a new symptom.
- POST a new symptom for patient id.
- POST a new covid_test for patient id.

### PATCH Methods
- PATCH a new patient.
- PATCH a new symptom.
- PATCH a new symptom for patient id.
- PATCH a new covid_test for patient id.

### DELETE Methods
- DELETE a patient.
- DELETE a symptom of patient.

## Good Luck!