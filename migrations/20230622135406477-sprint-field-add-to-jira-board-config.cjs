const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_board_configurations', 'sprint_field', {
        type: DataTypes.STRING,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
   await queryInterface.removeColumn('jira_board_configurations', 'sprint_field')
}

module.exports = { up, down };
