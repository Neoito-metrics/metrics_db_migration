const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('slack_users', {
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
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        real_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('slack_users')
}

module.exports = { up, down };
