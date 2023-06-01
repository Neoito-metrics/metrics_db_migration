const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_issues', 'board_id')
    await queryInterface.addColumn('jira_issues', 'jira_project_id', {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'jira_projects',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })

}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_issues', 'jira_project_id')
    await queryInterface.addColumn('jira_issues', 'board_id', {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'jira_boards',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
}

module.exports = { up, down };
