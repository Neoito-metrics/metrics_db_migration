const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.renameColumn(
        'jira_board_configurations',
        'deployment_done_status',
        'development_done_status'
      );

}

async function down({ context: queryInterface }) {
    await queryInterface.renameColumn(
        'jira_board_configurations',
        'development_done_status',
        'deployment_done_status'
      );
}

module.exports = { up, down };
