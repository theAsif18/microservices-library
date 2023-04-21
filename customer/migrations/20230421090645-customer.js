'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATEONLY,
          allowNull: true
        }
      },
      {
        timestamps: false,
        tableName: 'customers'
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};
