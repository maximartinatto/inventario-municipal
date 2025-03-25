const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  const Reparaciones = sequelize.define('Reparaciones',
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
      numeroOrden: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "numero_orden",
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
      
      timestamps: false,
    }
  );
  
  return Reparaciones;
}

