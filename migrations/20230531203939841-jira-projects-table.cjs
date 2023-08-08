const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('jira_projects', {
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
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jira_project_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })

}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('jira_projects')
}

module.exports = { up, down };
