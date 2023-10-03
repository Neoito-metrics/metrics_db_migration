const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */

    await queryInterface.addColumn('jira_boards', 'jira_project_id', {
        type: DataTypes.STRING,
        defaultValue: 0,
        allowNull: true

    })
}


async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
    await queryInterface.removeColumn('jira_boards', 'jira_project_id');
}

module.exports = { up, down };
