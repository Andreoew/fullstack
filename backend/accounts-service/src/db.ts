import { Sequelize } from 'sequelize';

const dbName = process.env.BD_NAME!;
const dbUser = process.env.BD_USER!;
const dbPassword = process.env.BD_PASSWORD;
const dbHost = process.env.BD_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost
});

export default sequelize;

