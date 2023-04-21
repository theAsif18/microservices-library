
const DataTypes = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'book',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  },
  {
    timestamps: false,
    tableName: 'book'
  }
)
