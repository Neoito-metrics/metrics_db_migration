const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {

    await queryInterface.addColumn('jira_board_configurations', 'qa_done_status', {
        type: Sequelize.STRING,
        allowNull: true
      });
  
      await queryInterface.addColumn('jira_board_configurations', 'deployment_done_status', {
        type: Sequelize.STRING,
        allowNull: true
      });
  
      // Step 2: Update the new columns with data from existing columns
      await queryInterface.sequelize.query(`
        UPDATE jira_board_configurations
        SET qa_done_status = end_status;
      `);
  
      await queryInterface.sequelize.query(`
        UPDATE jira_board_configurations
        SET deployment_done_status = end_status;
      `);
  
      // Step 3: Modify the columns to be non-nullable
      await queryInterface.changeColumn('jira_board_configurations', 'qa_done_status', {
        type: Sequelize.STRING,
        allowNull: false
      });
  
      await queryInterface.changeColumn('jira_board_configurations', 'deployment_done_status', {
        type: Sequelize.STRING,
        allowNull: false
      });
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('jira_board_configurations', 'qa_done_status');
    await queryInterface.removeColumn('jira_board_configurations', 'deployment_done_status');
}

module.exports = { up, down };
