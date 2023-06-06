const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('jira_tokens', 'new_token', {
        type: Sequelize.BLOB,
        allowNull: true,
      });
  
      // Copy the data from the old column to the new column
      await queryInterface.sequelize.query('UPDATE jira_tokens SET new_token = CAST(token AS BYTEA)');
  
      // Remove the old column
      await queryInterface.removeColumn('jira_tokens', 'token');
  
      // Rename the new column to the original name
      await queryInterface.renameColumn('jira_tokens', 'new_token', 'token');

}

async function down({ context: queryInterface }) {
    await queryInterface.addColumn('jira_tokens', 'new_token', {
        type: Sequelize.STRING,
        allowNull: false,
      });
  
      // Copy the data from the old column to the new column
      await queryInterface.sequelize.query('UPDATE jira_tokens SET new_token = CAST(token AS STRING)');
  
      // Remove the old column
      await queryInterface.removeColumn('jira_tokens', 'token');
  
      // Rename the new column to the original name
      await queryInterface.renameColumn('jira_tokens', 'new_token', 'token');
}

module.exports = { up, down };
