const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */

        await queryInterface.createTable('jira_status', {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
            },
            project_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'projects',
                key: 'id'
              }
            },
            board_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'jira_boards',
                key: 'id'
              }
            },
            status_id: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            name: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            statusCategory: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            createdAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            }
          });
    }

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
        await queryInterface.dropTable('jira_status');
}

module.exports = { up, down };
