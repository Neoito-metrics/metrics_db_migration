const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('github_pull_requests', 'url', {
        type: DataTypes.STRING,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('github_pull_requests', 'url')
}

module.exports = { up, down };
