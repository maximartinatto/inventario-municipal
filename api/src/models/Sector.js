const { Model, DataTypes } = require("sequelize");

class Sector extends Model {}

Sector.init(
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
    cantidadEmpleados: {
      type: DataTypes.INTEGER,
      allowNull
    }
  },
  {
    sequelize,
    modelName: "categoria",
    timestamps: false,
  }
);
