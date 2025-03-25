const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const UsuarioAsignado = sequelize.define(
    "UsuarioAsignado",
    {
      id: {
        type: DataTypes.INTEGER, // Cambiado a INTEGER para coincidir con otros modelos
        autoIncrement: true,
        primaryKey: true,
      },
      usuarioId: { // Cambiado de userId a usuarioId para mantener consistencia
        type: DataTypes.INTEGER, // Cambiado a INTEGER
        allowNull: false,
        field: "usuario_id", // Usar snake_case para el nombre de campo en la base de datos
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      dispositivoId: {
        type: DataTypes.INTEGER, // Cambiado a INTEGER
        allowNull: false,
        field: "dispositivo_id", // Usar snake_case
      },
      sectorId: {
        type: DataTypes.INTEGER, // Cambiado a INTEGER
        allowNull: false,
        field: "sector_id", // Usar snake_case
      },
      fechaAsignacion: { // Cambiado de assignedAt a fechaAsignacion para mantener consistencia
        type: DataTypes.DATE,
        allowNull: false,
        field: "fecha_asignacion", // Usar snake_case
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "usuario_asignados", // Especificar el nombre correcto de la tabla
      timestamps: false,
    }
  );
  
  return UsuarioAsignado;
};