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

#### Patients
### GET Methods
- GET "/api/v1/patients" all patients with their city, symptoms, covid test and status. 
- GET "/api/v1/patients/byId/:patientId" patient by id with their city, symptoms, covid test and status.
- GET "/api/v1/patients/positive" all patients with covid Tests that are positive.
### POST Methods
- POST "/api/v1/patients" a new patient with new CovidTests and thier new symptom
### DELETE Methods
- "/api/v1/patients/:patientId DELETE a patient.

#### Hospitals
### GET Methods
- GET "/api/v1/hospitals" all hospitals with their capacity (maxCapacity), number of respirator (respiratorAmount)
- GET "/api/v1/hospitals/byId/:hospitalId" Hospital by id.
- GET "/api/v1/hospitals/respirator_luck" all the hospitals that need to bring more respirator machines (less than five machines that are available in the hospital).

### Cities
#### GET Methods
- GET "/api/v1/cities" all cities number of sick people in every hospital in the city.
- GET "/api/v1/cities/byId/:cityId" city by id with its number of patients.
- GET "/api/v1/cities/mostsick" the city with the most patients (regardless of their state) as an array as there can be several cities at the top.
#### PUT Methods
- PUT "/api/v1/cities/:cityId" update a city name or population. 
#### DELETE Methods
- DELETE "/api/v1/cities/:cityId" a city.

### Symptoms
#### GET Methods
- GET "/api/v1/symptoms" all symptoms.
- GET "/api/v1/symptoms/byId/:symptomId" symptom by id.
#### POST Methods
- POST "/api/v1/symptoms" add new symptom for patient

#### DELETE Methods
- DELETE  "/api/v1/symptomsByPatient/:patientId" delete symptom by patient id.

### Covid Tests
#### GET Methods
- GET "/api/v1/covidtests/test-results/:testResult" The amount of covid test by result(true- 1/ false- 0)
- GET "/api/v1/covidtests/test-results/:pateintId" All covid tests by patient id.
#### PUT Methods
- PUT "/api/v1/covidtests/:patientId update covid test result by patient id. 

#### DELETE Methods
- DELETE a patient with paranoid.
- DELETE "/api/vi/covidtests/:testId a covid test.

## Good Luck!