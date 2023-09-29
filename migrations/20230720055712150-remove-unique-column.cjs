const { Sequelize, DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
    await queryInterface.removeConstraint('health_scores', 'health_scores_date_key')
}

async function down({ context: queryInterface }) {
    await queryInterface.addConstraint('health_scores', {
        fields: ['date'],
        type: 'unique',
        name: 'health_scores_date_key'
    })
}

module.exports = { up, down };
