const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('github_installations', {
        installation_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    });

    await queryInterface.addColumn('integrations', 'github_id', {
        type: DataTypes.INTEGER,
        references: {
            model: 'github_installations',
            key: 'installation_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.removeColumn('integrations', 'github_id');
    await queryInterface.dropTable('github_installations');
}

module.exports = { up, down };
