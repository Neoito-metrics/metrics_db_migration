const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('jira_issues_sprints', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'jira_issues',
                key: 'key'
            }
        },
        sprint_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        key_sprint_hash: {
            type: DataTypes.STRING,
            unique: true
        }
    })

}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('jira_issues_sprints')
}

module.exports = { up, down };
