const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('users', 'reset_password_token', {
        type: DataTypes.STRING,
        allowNull: true

    })

}

async function down({ context: queryInterface }) {

    await queryInterface.removeColumn('users', 'reset_password_token')
}

module.exports = { up, down };
