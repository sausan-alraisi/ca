export default (sequelize, DataTypes) => {
  const TicketLog = sequelize.define('TicketLog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ticket_id: { type: DataTypes.INTEGER, allowNull: false },
    log_info: { type: DataTypes.TEXT, allowNull: false },
  }, {
    tableName: 'ticket_logs',
    timestamps: true,
  });

  return TicketLog;
};
