require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {
  DispositivoModel,
  CategoriaModel,
  UsuarioModel,
  ReparacionesModel,
  SectorModel,
  UsuarioAsignadoModel,
} = require("./models/index");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/inventario-municipal`,
  {
    logging: false,
    native: false,
  }
);

// Conecta los modelos a Sequelize
DispositivoModel(sequelize);
CategoriaModel(sequelize);
UsuarioModel(sequelize);
ReparacionesModel(sequelize);
SectorModel(sequelize);
UsuarioAsignadoModel(sequelize);

const { Dispositivo, Categoria, Usuario, Reparaciones, Sector, UsuarioAsignado } = sequelize.models;

// Relaciones entre los modelos
Categoria.hasMany(Dispositivo, { foreignKey: "categoriaId", as: "dispositivos" });
Dispositivo.belongsTo(Categoria, { foreignKey: "categoriaId", as: "categoria" });

Sector.hasMany(Dispositivo, { foreignKey: "sectorId", as: "dispositivos" });
Dispositivo.belongsTo(Sector, { foreignKey: "sectorId", as: "sector" });

Usuario.hasMany(Reparaciones, { foreignKey: "usuarioId", as: "reparaciones" });
Reparaciones.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

Dispositivo.hasMany(Reparaciones, { foreignKey: "dispositivoId", as: "reparaciones" });
Reparaciones.belongsTo(Dispositivo, { foreignKey: "dispositivoId", as: "dispositivo" });

Dispositivo.hasMany(UsuarioAsignado, { foreignKey: "dispositivoId", as: "asignaciones" });
UsuarioAsignado.belongsTo(Dispositivo, { foreignKey: "dispositivoId", as: "dispositivo" });

Usuario.hasMany(UsuarioAsignado, { foreignKey: "usuarioId", as: "asignaciones" });
UsuarioAsignado.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

// Exporta después de que los modelos han sido definidos
module.exports = {
  conn: sequelize,
  ...sequelize.models,
};