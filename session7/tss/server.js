import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import userRoutes from './routes/userRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import ticketLogRoutes from './routes/ticketLogRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/tickets', ticketRoutes);
app.use('/ticket-logs', ticketLogRoutes);


// Test DB connection
db.sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
