const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('jira_issues_history', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        issue_key: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'jira_issues',
                key: 'key'
            }
        },
        author: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        field: {
            type: DataTypes.STRING
        },
        from: {
            type: DataTypes.STRING
        },
        to: {
            type: DataTypes.STRING
        },
        history_hash: {
            type: DataTypes.STRING,
            unique: true
        }
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable("jira_issues_history")
}

module.exports = { up, down };
