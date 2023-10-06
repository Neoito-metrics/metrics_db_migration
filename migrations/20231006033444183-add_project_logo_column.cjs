const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
        await queryInterface.addColumn('projects', 'project_logo', {
            type: DataTypes.STRING,
            allowNull: true
    
        })
}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
    await queryInterface.removeColumn('projects', 'project_logo')
}

module.exports = { up, down };
