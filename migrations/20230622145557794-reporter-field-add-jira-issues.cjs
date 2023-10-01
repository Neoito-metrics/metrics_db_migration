const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_issues', 'reporter', {
        type: DataTypes.STRING,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_issues', 'reporter')
}

module.exports = { up, down };
