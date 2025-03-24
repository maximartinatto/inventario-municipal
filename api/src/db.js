require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {
  DispositivoModel,
  CategoriaModel,
  UsuarioModel,
  ReparacionModel,
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

DispositivoModel(sequelize);
CategoriaModel(sequelize);
UsuarioModel(sequelize);
ReparacionModel(sequelize);
SectorModel(sequelize);
UsuarioAsignadoModel(sequelize);

const { Dispositivo, Categoria, Usuario, Reparacion, Sector, UsuarioAsignado } = sequelize.models;

// Relaciones
Sector.hasMany(Dispositivo, { foreignKey: "sectorId", as: "dispositivos" });
Dispositivo.belongsTo(Sector, { foreignKey: "sectorId", as: "sector" });
Dispositivo.belongsTo(Categoria, {
  foreignKey: "categoriaId",
  as: "categoria",
});
Categoria.hasMany(Dispositivo, {
  foreignKey: "categoriaId",
  as: "dispositivos",
});
Dispositivo.hasMany(Reparacion, {
  foreignKey: "dispositivoId",
  as: "reparaciones",
});
Reparacion.belongsTo(Dispositivo, {
  foreignKey: "dispositivoId",
  as: "dispositivo",
});
Dispositivo.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });
UsuarioAsignado.hasMany(Dispositivo, { foreignKey: "usuarioId", as: "dispositivos" });

module.exports = {
  conn: sequelize,
  ...sequelize.models,
  // Agrega los demás modelos aquí...
};
