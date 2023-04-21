const DataTypes = require('sequelize')
const db = require('../db.js')

module.exports = db.sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    custometId: {
      type: DataTypes.INTEGER,
    },
    bookId: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.INTEGER,
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
    tableName: 'orders'
  }
)
