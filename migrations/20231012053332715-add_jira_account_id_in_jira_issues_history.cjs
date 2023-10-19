const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_issues_history', 'assignee_jira_account_id', {
        type: DataTypes.STRING,
        allowNull: true,
    });

}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_issues_history', 'assignee_jira_account_id');
}

module.exports = { up, down };
