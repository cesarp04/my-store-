const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize')

const USER_TABLE = 'users';

const User = sequelize.define(USER_TABLE, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
});

User.sync();

// class User extends Model {
//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: USER_TABLE,
//       modelName: 'User',
//       timestamps: false,
//     };
//   }
// }

module.exports = { User };
