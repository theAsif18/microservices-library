const Sequelize = require('sequelize')

const db = {}

const sequelize = new Sequelize("customer", "root", "root", {
  host: "localhost",
  dialect: "mysql"
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
