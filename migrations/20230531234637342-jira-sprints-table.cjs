const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('jira_sprints', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        board_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'jira_boards',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        sprint_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sprint_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        complete_date: {
            type: DataTypes.DATE
        },
        goal: {
            type: DataTypes.STRING
        }
    })

}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('jira_sprints')
}

module.exports = { up, down };
