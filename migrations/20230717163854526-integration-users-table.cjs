const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('integration_users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'id'
            }
        },
        github_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'github_users',
                key: 'id'
            }
        },
        slack_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'slack_users',
                key: 'id'
            }
        },
        jira_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, { timestamps: false });
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('integration_users');
}

module.exports = { up, down };
