'use strict';

const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) =>{
   await queryInterface.bulkInsert('Boards',[
    {name:'GSAB', createdAt:new Date(), updateAdt: new Date()},
    {name:'CBSE', createdAt:new Date(), updatedAt: new Date()}
   ]);
  },

  down: async  (queryInterface, Sequelize) =>{

    await queryInterface.bulkDelete('Boards', null, {});
     
  }
};