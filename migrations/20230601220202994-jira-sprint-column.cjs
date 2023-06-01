const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_issues', 'sprint_id', {
        type: DataTypes.INTEGER,
        allowNull: true
    })

    await queryInterface.addColumn('jira_issues', 'story_points', {
        type: DataTypes.INTEGER,
        allowNull: true
    })

}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_issues', 'sprint_id')
    await queryInterface.removeColumn('jira_issues', 'story_points')
}

module.exports = { up, down };
