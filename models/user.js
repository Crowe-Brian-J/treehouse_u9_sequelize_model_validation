'use strict'
const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class User extends Model {}
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A name is required'
          },
          notEmpty: {
            msg: 'Please provide a name'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'The email you entered already exists'
        },
        validate: {
          notNull: {
            msg: 'An email is required'
          },
          isEmail: {
            msg: 'Please provide a valid email address'
          }
        }
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A birthday is required'
          },
          isDate: {
            msg: 'Your birthday must be a valid date'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A password is required'
          },
          notEmpty: {
            msg: 'Please provide a password'
          },
          len: {
            args: [8, 20],
            msg: 'The password should be between 8 and 20 characters in length'
          }
        }
      }
    },
    { sequelize }
  )

  return User
}
