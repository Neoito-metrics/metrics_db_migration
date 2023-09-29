const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addColumn('projects', 'health_status', {
        type: DataTypes.STRING,
        allowNull: true
    });
    await queryInterface.addColumn('projects', 'health_score', {
        type: DataTypes.FLOAT,
        allowNull: true
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('projects', 'health_score')
    await queryInterface.removeColumn('projects', 'health_status')
}

module.exports = { up, down };
