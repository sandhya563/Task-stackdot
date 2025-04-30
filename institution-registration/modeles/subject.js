const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Subjects',{
        name: DataTypes.STRING
    });
}