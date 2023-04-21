'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        author: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATEONLY,
          allowNull: true
        }
      },
      {
        timestamps: false,
        tableName: 'book'
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book');

  }
};
