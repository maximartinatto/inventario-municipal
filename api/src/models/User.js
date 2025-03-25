const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const RolUsuario = {
  ADMIN: "admin",
  TECNICO: "tecnico",
  USUARIO: "usuario",
};

module.exports = (sequelize) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM(...Object.values(RolUsuario)),
        allowNull: false,
        defaultValue: RolUsuario.USUARIO,
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "fecha_creacion",
      },
      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      
      timestamps: false,
      hooks: {
        beforeCreate: async (usuario) => {
          usuario.password = await bcrypt.hash(usuario.password, 10);
        },
      },
    }
  );

  return Usuario;
  
};
