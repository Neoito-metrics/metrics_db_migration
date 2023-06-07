const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */

    await queryInterface.addColumn('jira_board_configurations','board_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jira_boards',
          key: 'id',
        },
    })

    await queryInterface.addColumn('jira_board_configurations', 'in_progress_status', {
        type: Sequelize.STRING,
        allowNull: true,
      });

}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */

    await queryInterface.removeColumn('jira_board_configurations', 'board_id');
    await queryInterface.removeColumn('jira_board_configurations', 'in_progress_status');
}

module.exports = { up, down };
