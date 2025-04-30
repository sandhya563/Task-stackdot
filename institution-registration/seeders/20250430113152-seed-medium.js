'use strict';

const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
   await queryInterface.bulkInsert('Media',[
    {name:'English', createdAt:new Date(), updatedAt: new Date()},
    {name:'Hindi', createdAt:new Date(), updatedAt: new Date()}
   ]);
  },

  down: async  (queryInterface, Sequelize)=> {

    await queryInterface.bulkDelete('Media', null, {});
     
  }
};
