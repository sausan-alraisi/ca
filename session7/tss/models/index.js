import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './user.js';
import TicketModel from './ticket.js';
import TicketLogModel from './ticketLog.js';
import ClientModel from './client.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = UserModel(sequelize, DataTypes);
db.Ticket = TicketModel(sequelize, DataTypes);
db.TicketLog = TicketLogModel(sequelize, DataTypes);
db.Client = ClientModel(sequelize, DataTypes);

// Relations
db.User.hasMany(db.Ticket, { foreignKey: 'user_id' });
db.Ticket.belongsTo(db.User, { foreignKey: 'user_id' });

db.Ticket.hasMany(db.TicketLog, { foreignKey: 'ticket_id' });
db.TicketLog.belongsTo(db.Ticket, { foreignKey: 'ticket_id' });

export default db;
