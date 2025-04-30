'use strict';

const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize)=> {
   await queryInterface.bulkInsert('Classcategories',[
    {name:'Pre-primary', createdAt:new Date(), updatedAt: new Date()},
    {name:'Primary', createdAt:new Date(), updatedAt: new Date()},
    {name:'Secondary', createdAt:new Date(), updatedAt: new Date()}

   ]);
  },

  down: async  (queryInterface, Sequelize) =>{

    await queryInterface.bulkDelete('Classcategories', null, {});
     
  }
};