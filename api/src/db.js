require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
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

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Dispositivo, Categoria, Usuario, Reparacion, Sector, UsuarioAsignado } = sequelize.models;

// Relaciones entre los modelos
Categoria.hasMany(Dispositivo, { foreignKey: "categoriaId", as: "dispositivos" });
Dispositivo.belongsTo(Categoria, { foreignKey: "categoriaId", as: "categoria" });

Sector.hasMany(Dispositivo, { foreignKey: "sectorId", as: "dispositivos" });
Dispositivo.belongsTo(Sector, { foreignKey: "sectorId", as: "sector" });

Usuario.hasMany(Reparacion, { foreignKey: "usuarioId", as: "reparaciones" });
Reparacion.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

Dispositivo.hasMany(Reparacion, { foreignKey: "dispositivoId", as: "reparaciones" });
Reparacion.belongsTo(Dispositivo, { foreignKey: "dispositivoId", as: "dispositivo" });

Dispositivo.hasMany(UsuarioAsignado, { foreignKey: "dispositivoId", as: "asignaciones" });
UsuarioAsignado.belongsTo(Dispositivo, { foreignKey: "dispositivoId", as: "dispositivo" });

Usuario.hasMany(UsuarioAsignado, { foreignKey: "usuarioId", as: "asignaciones" });
UsuarioAsignado.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });


module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
