export default (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'categories',
    timestamps: true,
  });

  return Categories;
};
