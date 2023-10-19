const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('github_jira_user_mappings', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        jira_account_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jira_display_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        github_username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github_user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'github_users',
                key: 'id'
            }         
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
        }
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('github_jira_user_mappings');
}

module.exports = { up, down };
