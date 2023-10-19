const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.removeConstraint('github_jira_user_mappings', 'github_jira_user_mappings_github_user_id_fkey');
}

async function down({ context: queryInterface }) {
    await queryInterface.addConstraint('github_jira_user_mappings', {
        type: 'foreign key',
        name: 'github_jira_user_mappings_github_user_id_fkey',
        fields: ['github_user_id'],
        references: {
            table: 'github_users',
            field: 'id'
        },
    });
}

module.exports = { up, down };
