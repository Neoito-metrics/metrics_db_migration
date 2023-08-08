const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('github_pr_reviews', 'reviewed_by', {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    });
}

async function down({ context: queryInterface }) {

    await queryInterface.removeColumn('github_pr_reviews', 'reviewed_by');

}

module.exports = { up, down };
