const { Model, DataTypes } = require("sequelize");
const { UsuarioAsignado } = require("./UsuarioAsignado");
const { Reparaciones } = require("./Reparaciones");
const { Categoria } = require("./Categoria");
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

class Dispositivo extends Model {}

Dispositivo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    // campos especificos para computadoras y notebooks
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

    // campos especificos para impresoras
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
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "usuario_id",
      references: {
        model: UsuarioAsignado,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "categoria_id",
      references: {
        model: Categoria,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    reparacionesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "reparaciones_id",
      references: {
        model: Reparaciones,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL ",
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
    sequelize,
    modelName: "Dispositivo",
    tableName: "dispositivos",
    timestamps: false,
  }
);

module.exports = { Dispositivo, EstadoDispositivo, TipoDispositivo };