const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    /*
        migration and seed logic goes here
    */
// create table metrics_history with columns id (auto increment) , project_id , date , history (jsonb)
// project_id and date should be unique

    await queryInterface.createTable("metrics_history", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        history: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
    });

    await queryInterface.addIndex("metrics_history", ["project_id", "date"], {
        unique: true,
    })

}

async function down({ context: queryInterface }) {
    /*
        undo migration  logic goes here
    */
    await queryInterface.dropTable("metrics_history");
    
}

module.exports = { up, down };
