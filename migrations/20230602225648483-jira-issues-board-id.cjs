const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_issues', 'board_id', {
        type: DataTypes.INTEGER,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
   await queryInterface.removeColumn('jira_issues', 'board_id')
}

module.exports = { up, down };
