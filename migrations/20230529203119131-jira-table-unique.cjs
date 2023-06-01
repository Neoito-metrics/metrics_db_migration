const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_boards', 'board_link', {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_boards', 'board_link');
}

module.exports = { up, down };
