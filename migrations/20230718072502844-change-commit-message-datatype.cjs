const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.changeColumn('github_commits', 'commit_message', {
        type: DataTypes.TEXT,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.changeColumn('github_commits', 'commit_message', {
        type: DataTypes.STRING,
        allowNull: true
    })
}

module.exports = { up, down };
