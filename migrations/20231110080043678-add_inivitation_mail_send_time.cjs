const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('github_jira_user_mappings', 'invitation_date', {
        type: DataTypes.DATE,
        allowNull: true
})
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('github_jira_user_mappings', 'invitation_date')
}

module.exports = { up, down };
