import {  DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

import dotenv from 'dotenv';
import UserModel from './user.js';
import TicketModel from './ticket.js';
import TicketLogModel from './ticketLog.js';
import ClientModel from './client.js';
import categoriesModel from './categories.js';

dotenv.config();



const db = {};
db.Sequelize = sequelize.constructor; 
db.sequelize = sequelize;
// Models
db.User = UserModel(sequelize, DataTypes);
db.Ticket = TicketModel(sequelize, DataTypes);
db.TicketLog = TicketLogModel(sequelize, DataTypes);
db.Client = ClientModel(sequelize, DataTypes);
db.Categories = categoriesModel(sequelize, DataTypes);

// Relations
db.User.hasMany(db.Ticket, { foreignKey: 'user_id' });
db.Ticket.belongsTo(db.User, { foreignKey: 'user_id' });

db.Ticket.hasMany(db.TicketLog, { foreignKey: 'ticket_id' });
db.TicketLog.belongsTo(db.Ticket, { foreignKey: 'ticket_id' });

export default db;
