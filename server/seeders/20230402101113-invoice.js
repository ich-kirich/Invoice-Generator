'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('invoices', [{
      id: 1,
      email: 'example@gmail.com',
      firstName: 'Client',
      lastName: 'Example',
      company: 'Horns and Hooves',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('invoices', null, {});
  }
};
