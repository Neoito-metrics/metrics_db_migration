const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('github_users', {
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
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_project_hash: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { timestamps: false })

}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable("github_users")
}

module.exports = { up, down };
