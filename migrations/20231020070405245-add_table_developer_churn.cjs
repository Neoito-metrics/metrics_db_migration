const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */

        await queryInterface.createTable('developer_churns', {
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
            user_mapping_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'github_jira_user_mappings',
                  key: 'id'
                }
              },
            sprint_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            username: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            churn_contribution: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            total_contribution: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
          });
    }

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
        await queryInterface.dropTable('developer_churns');
}

module.exports = { up, down };
