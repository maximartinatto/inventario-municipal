const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Reparacion',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      numeroOrden: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "numero_orden",
      },
      dispositivoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "dispositivo_id",
      },
      fechaRecepcion: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "fecha_inicio",
      },
      tecnicoRecepcion: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "tecnico_recepcion",
      },
      tecnicoReparacion: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "tecnico_reparacion",
      },
      estadoReparacion: {
        type: DataTypes.ENUM('EN REPARACION', 'REPARADO', 'NO REPARADO'),
        allowNull: false,
        field: "estado_reparacion",
      },
      observacionesReparacion: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: "observaciones_reparacion",
      },
      fechaFinalizacion: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "fecha_fin",
      },
      contactoEntrega: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "contacto_entrega",
      }
    },
    {
      sequelize,
      modelName: "reparacion",
      timestamps: false,
    }
  );
  
  return sequelize.models.Reparacion;
}

