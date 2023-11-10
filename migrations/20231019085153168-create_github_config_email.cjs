const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {

    await queryInterface.addColumn('github_jira_user_mappings', 'git_config_email', {
        type: DataTypes.STRING,
        allowNull: true

    })
   await queryInterface.addColumn('github_jira_user_mappings', 'invitation_status', {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'pending'
})
await queryInterface.changeColumn('github_jira_user_mappings', 'github_email', {
    type: DataTypes.STRING,
    allowNull: true
})

}

async function down({ context: queryInterface }) {

    await queryInterface.removeColumn('github_jira_user_mappings', 'git_config_email')
    await queryInterface.removeColumn('github_jira_user_mappings', 'invitation_status');
    await queryInterface.changeColumn('github_jira_user_mappings', 'github_email', {
        type: DataTypes.STRING,
        allowNull: false
    }) 
}

module.exports = { up, down };
