const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('github_jira_user_mappings', 'code', {
        type: DataTypes.STRING,
        allowNull: true,
    });

    await queryInterface.renameColumn('github_jira_user_mappings', 'created_at', 'createdAt');
    await queryInterface.renameColumn('github_jira_user_mappings', 'updated_at', 'updatedAt');

}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('github_jira_user_mappings', 'code');
    await queryInterface.renameColumn('github_jira_user_mappings', 'createdAt', 'created_at');
    await queryInterface.renameColumn('github_jira_user_mappings', 'updatedAt', 'updated_at');
}

module.exports = { up, down };
