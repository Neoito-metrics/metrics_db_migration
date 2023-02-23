const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert("organizations", [
    {
      id: 1,
      name: "test org",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
  await queryInterface.bulkInsert("projects", [
    {
      id: 1,
      organization_id: 1,
      project_name: "test project",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      integration_id: null,
    },
  ]);
  await queryInterface.bulkInsert("jira_boards", [
    {
      id: 1,
      project_id: 1,
      board_name: 'UOBC',
      board_link: 'test.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ])
}

async function down({ context: queryInterface }) {
  await Promise.all([
    queryInterface.sequelize.query(`DELETE FROM jira_boards`),
    queryInterface.sequelize.query(`DELETE FROM projects`),
    queryInterface.sequelize.query(`DELETE FROM organizations`)
  ])
}

module.exports = { up, down };
