const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Sector',
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
      modelName: "categoria",
      timestamps: false,
    }
  );
  
  return sequelize.models.Sector;
}

