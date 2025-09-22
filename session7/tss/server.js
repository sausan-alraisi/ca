import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';

dotenv.config();

const app = express();
app.use(express.json());

// Test DB connection
db.sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
