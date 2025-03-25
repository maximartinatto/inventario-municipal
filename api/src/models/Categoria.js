const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Categoria', 
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
  return sequelize.models.Categoria;
}



