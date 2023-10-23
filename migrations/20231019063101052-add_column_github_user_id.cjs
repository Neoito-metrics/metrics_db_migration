const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
        await queryInterface.addColumn('news_feeds', 'github_user_id', {
            type: DataTypes.INTEGER,
            allowNull: true
    
        })

}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
        await queryInterface.removeColumn('news_feeds', 'github_user_id')
}

module.exports = { up, down };
