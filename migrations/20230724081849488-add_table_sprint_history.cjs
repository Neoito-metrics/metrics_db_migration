const { default: sequelize } = require("sequelize");
const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
    
    await queryInterface.createTable('sprint_history', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        board_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sprint_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sprint_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        history : {
            type : Sequelize.JSONB,
            allowNull : false
        },
        date : {
            type: Sequelize.DATE,
            allowNull: false,
        },
        date_project_hash : {
            type : sequelize.STRING,
            allowNull : false,
            unique: true
        }
    })
}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */

        await queryInterface.dropTable('sprint_history')
}

module.exports = { up, down };
