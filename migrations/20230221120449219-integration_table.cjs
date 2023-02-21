const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('integrations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        }
    })

    await queryInterface.addColumn('projects', 'integration_id', {
        type: DataTypes.INTEGER,
        references: {
            model: 'integrations',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('projects', 'integration_id');
    await queryInterface.dropTable('integrations');
}

module.exports = { up, down };
