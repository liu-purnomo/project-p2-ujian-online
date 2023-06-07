'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuestionGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questionNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      SessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sessions',
          key: 'id'
        },

      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },

      },
      QuestionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions',
          key: 'id'
        },

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuestionGroups');
  }
};