const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "UsuarioAsignado",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      dispositivoId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Devices",
          key: "id",
        },
      },
      sectorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Sectors",
          key: "id",
        },
      },
      assignedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "UserDeviceSector",
      tableName: "user_device_sectors",
      timestamps: true,
      underscored: true,
    }
  );

  return sequelize.models.UsuarioAsignado;
  
};
