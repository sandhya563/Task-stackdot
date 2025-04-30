'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize)=> {
   await queryInterface.createTable('Media',[
    {
      name:'English', 
      createdAt:new Date(), 
      updatedAt: new Date()
    },
    {
      name:'Hindi', 
      createdAt:new Date(), 
      updatedAt: new Date()
    }
   ]);
  },

  down: async  (queryInterface, Sequelize)=> {

    await queryInterface.dropTable('Media');
     
  }
};
