const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    
    await queryInterface.addColumn('github_jira_user_mappings', 'deleted', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      });

}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('github_jira_user_mappings', 'deleted');
}

module.exports = { up, down };
