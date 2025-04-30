const Sequelize = require('sequelize');
const sequelize = require('../config/db');


const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;

// Medels
db.InstitutionType = require('./institutionType')(sequelize, Sequelize.DataTypes);
db.Board = require('./board')(sequelize, Sequelize.DataTypes);
db.ClassCategory = require('./classCategory')(sequelize, Sequelize.DataTypes);
db.Medium = require('./medium')(sequelize, Sequelize.DataTypes);
db.Standard = require('./standard')(sequelize, Sequelize.DataTypes);
db.Subject = require('./subject')(sequelize, Sequelize.DataTypes);
db.UniversityDegree = require('./university')(sequelize, Sequelize.DataTypes);;
db.ExamType = require('./exmaType')(sequelize, Sequelize.DataTypes);
db.Registration = require('./registration')(sequelize, Sequelize.DataTypes);


// Associations
db.Registration.belongsTo(db.InstitutionType);
db.Registration.belongsTo(db.Board);
db.Registration.belongsTo(db.ClassCategory);
db.Registration.belongsTo(db.Medium);
db.Registration.belongsTo(db.Standard);
db.Registration.belongsTo(db.UniversityDegree);
db.Registration.belongsTo(db.ExamType)

module.exports = db;
