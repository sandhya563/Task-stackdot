const { Sequelize } = require('sequelize');
// require.apply('dontenv').config;

const sequelize = new Sequelize('todotask','sandy', 'sandy@123',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = sequelize;