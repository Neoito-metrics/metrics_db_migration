const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addConstraint('jira_board_configurations', {
        fields: ['project_id'],
        type: 'unique',
        name: 'jira_board_configuration_project_id_key'
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeConstraint('jira_board_configurations', 'jira_board_configuration_project_id_key')
}

module.exports = { up, down };
