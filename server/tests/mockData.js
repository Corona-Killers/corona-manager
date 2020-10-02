const patientsMock = [
  {
    name: "patient1",
    dateOfBirth: new Date(2001, 4, 5),
    cityId: 2,
    status: "isolation",
    hospitalId: 1,
  },
  {
    name: "patient2",
    dateOfBirth: new Date(1991, 11, 19),
    cityId: 1,
    status: "dead",
    hospitalId: 1,
  },
  {
    name: "patient3",
    dateOfBirth: new Date(1987, 2, 22),
    cityId: 1,
    status: "respiratory",
    hospitalId: 2,
  },
  {
    name: "patient4",
    dateOfBirth: new Date(1953, 5, 15),
    cityId: 2,
    status: "respiratory",
    hospitalId: 2,
  },
  {
    name: "patient5",
    dateOfBitrth: new Date(1989, 1, 30),
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
  ]

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
        name: 'Rambam',
        respiratorAmount: 7,
        maxCapacity: 20
      },
      {
        name: 'Tel Hashomer',
        respiratorAmount: 10,
        maxCapacity: 15
      }
  ];

  module.exports = symptomMock;
  module.exports = patientsMock;
  module.exports = SymptomsByPatientsMock;
  module.exports = HospitalsMock;
  module.exports = covidTestMock;
