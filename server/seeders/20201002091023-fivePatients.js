'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Patients', [
      {
        name: 'Dekel Vaknin',
        
        cityId: null,
        status: null,
        hospitalId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Yakov Levi',
        
        cityId: null,
        status: null,
        hospitalId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Ido Shamir',
        
        cityId: null,
        status: null,
        hospitalId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Haim Yosef',
        
        cityId: null,
        status: null,
        hospitalId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Naama Sharon',
        
        cityId: null,
        status: null,
        hospitalId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
