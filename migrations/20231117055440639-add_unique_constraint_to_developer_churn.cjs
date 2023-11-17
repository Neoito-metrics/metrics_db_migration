const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.addConstraint('developer_churns', {
        fields: ['project_id', 'user_mapping_id', 'sprint_id'],
        type: 'unique',
        name: 'developer_churns_unique'
      });

}

async function down({ context: queryInterface }) {
    await queryInterface.removeConstraint('developer_churns', 'developer_churns_unique');

}

module.exports = { up, down };
