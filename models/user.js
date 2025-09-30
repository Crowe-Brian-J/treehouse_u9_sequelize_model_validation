'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}
  User.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING    
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    password: {
      type: DataTypes.STRING
    }
  }, { sequelize });

  return User;
};