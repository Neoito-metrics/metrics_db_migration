const { DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.addColumn("users", "username", {
    type: DataTypes.STRING,
  });
  await queryInterface.addColumn("users", "password", {
    type: DataTypes.STRING
  })
  await queryInterface.removeColumn("users", "phone_number");
  await queryInterface.removeColumn("users", "name");
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn("users", "username");
  await queryInterface.removeColumn("users", "password");
  await queryInterface.addColumn("users", "phone_number", { type: DataTypes.STRING });
  await queryInterface.addColumn("users", "name", { type: DataTypes.STRING });
}

module.exports = { up, down };
