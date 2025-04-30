const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Registrstion',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING

    });
}