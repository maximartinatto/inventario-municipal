const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {}

Categoria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "categoria",
    timestamps: false,
  }
);

module.exports = Categoria;