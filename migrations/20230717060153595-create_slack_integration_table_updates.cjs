const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('slack_tokens', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        project_id: DataTypes.INTEGER,
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        }

    })
    await queryInterface.addColumn('integrations', 'slack_id', {
        type: DataTypes.INTEGER,
        allowNull: true
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('slack_tokens')
    await queryInterface.removeColumn('integrations', 'slack_id')
}

module.exports = { up, down };


module.exports = { up, down };
