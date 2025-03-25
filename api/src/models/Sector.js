const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Sector = sequelize.define('Sector',
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
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Sector",
      timestamps: false,
    }
  );
  
  return Sector;
}

