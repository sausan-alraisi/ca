import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,     // المستخدم
  process.env.DB_PASSWORD, // الباسورد
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Unable to connect to DB:', err));

export default sequelize;
