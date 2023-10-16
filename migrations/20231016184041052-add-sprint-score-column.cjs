const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_sprints', 'score', {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_sprints', 'score');
}

module.exports = { up, down };
