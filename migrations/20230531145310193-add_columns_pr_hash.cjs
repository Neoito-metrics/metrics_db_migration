const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */

        await queryInterface.addColumn('github_pr_commits', 'pr_commits_hash', {
            type: DataTypes.STRING,
            unique:true,
            allowNull: true
    
        })

        await queryInterface.addColumn('github_pr_reviews', 'pr_reviews_hash', {
            type: DataTypes.STRING,
            unique:true,
            allowNull: true
    
        })
}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
    await queryInterface.removeColumn('github_pr_commits', 'pr_commits_hash');
    await queryInterface.removeColumn('github_pr_reviews', 'pr_reviews_hash');


}

module.exports = { up, down };
