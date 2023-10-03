const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_boards', 'project_board_hash', {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.addConstraint('jira_boards', {
        fields: ['board_link'],
        type: 'unique',
        name: 'jira_boards_board_link_key'
    })
    await queryInterface.removeColumn('jira_boards', 'project_board_hash');

}

module.exports = { up, down };
