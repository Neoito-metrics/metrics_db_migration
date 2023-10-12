const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.createTable('news_feeds', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        value: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        from: {
          type: Sequelize.STRING(255),
        },
        to: {
          type: Sequelize.STRING(255),
        },
        project_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'projects',
            key: 'id',
          },
        },
        organization_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'organizations',
            key: 'id',
          },
          onDelete: 'CASCADE', 
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      });

}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('news_feeds');
}

module.exports = { up, down };
