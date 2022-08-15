'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'gin@gmail.com',
      password:'12345678',
      firstName: 'Son',
      lastName: 'GINNN',
      address:'HN',
      phonenumber:'123456789',
      gender: 1,
      image:'',
      roleId:'R1',
      positionId:'P1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
