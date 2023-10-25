const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_issues', 'original_estimate', {
        type: DataTypes.INTEGER,
        allowNull: true
    });

    await queryInterface.addColumn('jira_issues', 'time_spent', {
        type: DataTypes.INTEGER,
        allowNull: true
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_issues', 'original_estimate');
    await queryInterface.removeColumn('jira_issues', 'time_spent');
}

module.exports = { up, down };
