import { Sequelize } from 'sequelize';
require('dotenv-safe').config();
// require('dotenv-safe').config({ debug: true });

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
console.log(dbName, dbUser, dbPassword, dbHost);

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost
});

export default sequelize;