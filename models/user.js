'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING(15),
      },
      is_verified: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      password: {
        type: DataTypes.STRING(250),
      },
      is_email_verified: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      is_admin: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      delete_reason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return User;
  
};