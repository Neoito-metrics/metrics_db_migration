const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
   await queryInterface.addColumn('jira_boards', 'active', {
    type : DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
   }) 

   await queryInterface.addColumn('repositories','active', {
    type : DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
    
   })

}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
   await queryInterface.removeColumn('jira_boards','active');
   await queryInterface.removeColumn('repositories','active');
}

module.exports = { up, down };
