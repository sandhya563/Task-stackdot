'use strict';

const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:async  (queryInterface, Sequelize)=> {
   await queryInterface.bulkInsert('Standards',[
    {name:'LKG', createdAt:new Date(), updatedAt: new Date()},
    {name:'HKG', createdAt:new Date(), updatedAt: new Date()},

   ]);
  },

  down: async  (queryInterface, Sequelize)=> {

    await queryInterface.bulkDelete('Standards', null, {});
     
  }
};