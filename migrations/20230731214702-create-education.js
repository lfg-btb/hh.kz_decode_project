'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Education', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      university_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      faculty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      major: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      resume_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Resumes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Education');
  }
};

