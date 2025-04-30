'use strict';

const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) =>{
   await queryInterface.bulkInsert('InstitutionTypes',[
    {name:'Playhouse', createdAt:new Date(), updatedAt: new Date()},
    {name:'School', createdAt:new Date(), updatedAt: new Date()},
    {name:'College', createdAt:new Date(), updatedAt: new Date()},
    {name:'Competitive Exam Center', createdAt:new Date(), updatedAt: new Date()},



   ]);
  },

  down: async  (queryInterface, Sequelize)=> {

    await queryInterface.bulkDelete('InstitutionTypes', null, {});
     
  }
};