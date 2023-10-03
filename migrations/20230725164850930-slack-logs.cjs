const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('slack_logs', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'id'
            }
        },
        slack_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true
        },
        send_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable("slack_logs")
}

module.exports = { up, down };
