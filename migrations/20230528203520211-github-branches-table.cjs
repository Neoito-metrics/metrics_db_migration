const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
   await queryInterface.createTable('github_branches', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      repository_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'repositories',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      branch_name: DataTypes.STRING,
      creation_date: DataTypes.DATE,
      branch_hash: {
        type: DataTypes.STRING,
        unique: true
      }
   }, { timestamps: false})

}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('github_branches')
}

module.exports = { up, down };
