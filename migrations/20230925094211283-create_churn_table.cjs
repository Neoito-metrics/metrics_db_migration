const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
 
    await queryInterface.createTable('churn', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sprint_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        churn:{
            type: DataTypes.FLOAT
        },
        contributions:{
            type: DataTypes.INTEGER
        },
        total_churn:{
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
   
    });
    await queryInterface.addIndex('churn', ['project_id', 'sprint_id'], {
        name: 'churn_project_sprint_index',
        unique: true,
    });

    // add constraint churn_project_sprint_key
    await queryInterface.addConstraint('churn', {
        fields: ['project_id', 'sprint_id'],
        type: 'unique',
        name: 'churn_project_sprint_key',
    });

}

async function down({ context: queryInterface }) {
  
    await queryInterface.dropTable('churn');
}

module.exports = { up, down };
