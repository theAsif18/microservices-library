'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        custometId: {
          type: Sequelize.INTEGER,
        },
        bookId: {
          type: Sequelize.INTEGER,
        },
        amount: {
          type: Sequelize.INTEGER,
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
        tableName: 'orders'
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
