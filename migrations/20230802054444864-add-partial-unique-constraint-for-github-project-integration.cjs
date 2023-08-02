const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addIndex('integration_users', {
        fields: ['project_id', 'github_id'],
        unique: true,
        name: 'unique_project_github_mapping',
        where: {
          github_id: { [Sequelize.Op.not]: null }
        }
      });
}

async function down({ context: queryInterface }) {
    await queryInterface.removeIndex('integration_users', 'unique_project_github_mapping');
}

module.exports = { up, down };
