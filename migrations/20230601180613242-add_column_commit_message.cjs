const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */

        await queryInterface.addColumn('github_commits', 'commit_message', {
            type: DataTypes.STRING,
            allowNull: true
    
        })

}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
        await queryInterface.removeColumn('github_commits', 'commit_message');
}

module.exports = { up, down };
