import { Sequelize } from "sequelize";
import AWS from "aws-sdk";
import { readFileSync } from "fs";
import { Umzug, SequelizeStorage } from "umzug";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const STAGE = process.env.STAGE || "dev"
const AWS_REGION = process.env.AWS_REGION || "ap-south-1";
const SECRET_ARN = process.env.SECRET_ARN || `${STAGE}/metricsapp/secrets`;

const secretsManager = new AWS.SecretsManager({
  region: AWS_REGION,
});

async function runMigrations() {
  try {
	  console.log(SECRET_ARN);
    const secretsRequest = await secretsManager
      .getSecretValue({ SecretId: SECRET_ARN })
      .promise();
    const secrets = JSON.parse(secretsRequest.SecretString);
    const host = secrets.DB_HOST;
    const DB_NAME = secrets.DB_NAME;
    const DB_USER = secrets.DB_USER;
    const DB_PASS = secrets.DB_PASS;
    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
      host: host,
      dialect: "postgres",
    });

    const umzug = new Umzug({
      storage: new SequelizeStorage({ sequelize }),
      migrations: { glob: "migrations/*.cjs" },
      context: sequelize.getQueryInterface(),
      logger: console,
    });

    const seeder = new Umzug({
      storage: new SequelizeStorage({ sequelize, modelName: 'SequelizeData' }),
      migrations: { glob: "seeders/*.cjs" },
      context: sequelize.getQueryInterface(),
      logger: console,
    })

    const [, , command, migrationName] = process.argv;

    switch (command) {
      case "up":
        await umzug.up();
        console.log("All pending migrations have been run.");
        break;
      case "down":
        await umzug.down();
        console.log("The last executed migration has been reverted.");
        break;
      case "create":
        if (!migrationName) {
          console.log("Invalid argument: the migration name is missing.");
          return;
        }
        const migrationTemplate = readFileSync('./templates/migration.template.js', { encoding: 'utf8' });
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, "");
        const migrationFilename = `${timestamp}-${migrationName}.cjs`;
        fs.writeFileSync(
          path.join(__dirname, "migrations", migrationFilename),
          migrationTemplate
        );
        console.log(`Created migration ${migrationFilename}`);

        break;
      case "pending":
        const pending = await umzug.pending();
        console.log("The following migrations are pending:");
        console.log(pending.map((m) => m.file).join("\n"));
        break;
      case "executed":
        const executed = await umzug.executed();
        console.log("The following migrations have been executed:");
        console.log(executed.map((m) => m.file).join("\n"));
        break;
      case "step":
        const n = Number(migrationName);
        if (isNaN(n)) {
          console.log(`Invalid argument: ${migrationName} is not a number.`);
          return;
        }
        await umzug.up({ step: n });
        console.log(`The next ${n} pending migrations have been run.`);
        break;
      case "up-to":
        if (!migrationName) {
          console.log("Invalid argument: the migration name is missing.");
          return;
        }
        await umzug.up({ to: migrationName });
        console.log(
          `All migrations up to and including ${migrationName} have been run.`
        );
        break;
      case "down-to":
        if (!migrationName) {
          console.log("Invalid argument: the migration name is missing.");
          return;
        }
        await umzug.down({ to: migrationName });
        console.log(
          `All migrations down to and including ${migrationName} have been reverted.`
        );
        break;
      case "seed-up":
        await seeder.up();
        break;
      case "seed-down":
        await seeder.down();
        break;
      default:
        console.log(`Invalid command: ${command}`);
        break;
    }
  } catch (error) {
    console.error(error);
  }
}

runMigrations()
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.error(error);
  });
