const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const User = sequelize.define('user', {
    employeeid : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    section: {
       type:  Sequelize.STRING,
       allowNull: false,
       unique: true
    },
    Designation: Sequelize.STRING,
    Address: Sequelize.STRING
   
})

module.exports = User;

