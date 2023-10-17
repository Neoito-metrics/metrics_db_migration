const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
        await queryInterface.addColumn('github_jira_user_mappings', 'github_avatar_url', {
            type: DataTypes.STRING,
            allowNull: true
    
        })

        await queryInterface.addColumn('github_jira_user_mappings', 'score', {
            type: DataTypes.FLOAT,
            allowNull: true
    
        })

}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
        await queryInterface.removeColumn('github_jira_user_mappings', 'github_avatar_url')

        await queryInterface.removeColumn('github_jira_user_mappings', 'score')
}

module.exports = { up, down };
