const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
    await queryInterface.addColumn('github_pull_requests', 'state', {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: 'open'
    });
}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
    await queryInterface.removeColumn('github_pull_requests', 'state');
}


module.exports = { up, down };
