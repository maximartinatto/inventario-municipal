const { DataTypes } = require("sequelize");

const EstadoDispositivo = {
  OPERATIVO: "Operativo",
  EN_REPARACION: "En reparación",
  BAJA: "Baja",
};

const TipoDispositivo = {
  COMPUTADORA: "Computadora",
  NOTEBOOK: "Notebook",
  IMPRESORA: "Impresora",
};

module.exports = (sequelize) => {
  const Dispositivo = sequelize.define(
    "Dispositivo",
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
      tipo: {
        type: DataTypes.ENUM(...Object.values(TipoDispositivo)),
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      numeroSerie: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "numero_serie",
      },
      procesador: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      ram: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      almacenamiento: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tipoImpresora: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "tipo_impresora",
      },
      toner: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tecnologiaImpresion: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "tecnologia_impresion",
      },
      sectorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "sector_id",
        // No incluyas referencias aquí
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "usuario_id",
        // No incluyas referencias aquí
      },
      categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "categoria_id",
        // No incluyas referencias aquí
      },
      reparacionesId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "reparaciones_id",
        // No incluyas referencias aquí
      },
      fechaAdquisicion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: "fecha_adquisicion",
      },
      fechaFinalizacionReparacion: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: "fecha_finalizacion_reparacion",
      },
      estado: {
        type: DataTypes.ENUM(...Object.values(EstadoDispositivo)),
        allowNull: false,
        defaultValue: EstadoDispositivo.OPERATIVO,
      },
    },
    {
      timestamps: false,
    }
  );
  
  // Retorna el modelo para poder usarlo
  return Dispositivo;
};