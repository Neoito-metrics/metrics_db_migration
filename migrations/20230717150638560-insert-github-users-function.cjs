const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE PROCEDURE insert_github_users(p_id INTEGER)
      LANGUAGE plpgsql
      AS $$
      BEGIN
          INSERT INTO github_users (username, project_id, user_project_hash)
          SELECT DISTINCT gc.username, p_id,
                 encode(digest((gc.username || CAST(p_id AS TEXT))::text, 'sha256'), 'hex') AS user_project_hash
          FROM github_collaborators gc
          INNER JOIN repositories r ON gc.repository_id = r.id AND r.project_id = p_id
          ON CONFLICT (user_project_hash) DO NOTHING;
      END;
      $$;
    `);
  },

  down: async ({ context: queryInterface }) => {
    await queryInterface.sequelize.query(`
      DROP PROCEDURE IF EXISTS insert_github_users;
    `);
  },
};
