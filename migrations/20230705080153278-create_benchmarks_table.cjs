const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {

    await queryInterface.createTable('benchmarks', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        project_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        configurations: {
            type: Sequelize.JSONB,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    });
}

async function down({ context: queryInterface }) {
 
    await queryInterface.dropTable('benchmarks');

}

module.exports = { up, down };
