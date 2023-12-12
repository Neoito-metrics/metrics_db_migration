const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_projects', 'style', {
        type: DataTypes.TEXT,
        defaultValue: 'classic',
        allowNull: false
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.dropColumn('jira_projects', 'style')
}

module.exports = { up, down };
