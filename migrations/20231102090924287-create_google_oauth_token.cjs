const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    // /*
    //     migration and seed logic goes here
    // */

    // create  token column in users table as jsonb
    await queryInterface.addColumn('users', 'google_oauth', {
        type: DataTypes.JSONB,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
    await queryInterface.removeColumn('users', 'google_oauth')
}

module.exports = { up, down };
