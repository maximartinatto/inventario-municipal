const express = require('express');
const { createDispositivo, getAllDispositivos, getDispositivoById, updateDispositivo, deleteDispositivo, getDispositivosBySector, getDispositivosByUsuario } = require('../controllers/store/Dispositivo');
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/store/Categoria');
const { createSector, getAllSectors, getSectorById, updateSector, deleteSector } = require('../controllers/store/Sector');
const { createReparation, getAllReparations, getReparationById, updateReparation, deleteReparation } = require('../controllers/store/Reparaciones');
const { createAssignedUser, getAllAssignedUsers, getAssignedUserById, updateAssignedUser, deleteAssignedUser } = require('../controllers/store/UsuarioAsignado');


const { authMiddleware } = require('../middlewares/authMiddleware');


const storeRouter = express.Router();


// Dispositivos
storeRouter.post('/dispositivo', createDispositivo);
storeRouter.get('/dispositivos', getAllDispositivos);
storeRouter.get('/dispositivo/:id', getDispositivoById);
storeRouter.put('/dispositivo/:id', updateDispositivo);
storeRouter.delete('/dispositivo/:id', deleteDispositivo);
storeRouter.get('/dispositivos/sector/:id', getDispositivosBySector);
storeRouter.get('/dispositivos/usuario/:id', getDispositivosByUsuario);



// Categorias
storeRouter.post('/categoria', createCategory);
storeRouter.get('/categorias', getAllCategories);
storeRouter.get('/categoria/:id', getCategoryById);
storeRouter.put('/categoria/:id', updateCategory);
storeRouter.delete('/categoria/:id', deleteCategory);

// Sectores
storeRouter.post('/sector', createSector);
storeRouter.get('/sectores', getAllSectors);
storeRouter.get('/sector/:id', getSectorById);
storeRouter.put('/sector/:id', updateSector);
storeRouter.delete('/sector/:id', deleteSector);

// Reparaciones
storeRouter.post('/reparacion', createReparation);
storeRouter.get('/reparaciones', getAllReparations);
storeRouter.get('/reparacion/:id', getReparationById);
storeRouter.put('/reparacion/:id', updateReparation);
storeRouter.delete('/reparacion/:id', deleteReparation);

// Usuarios Asignados
storeRouter.post('/usuarioasignado', createAssignedUser);
storeRouter.get('/usuariosasignados', getAllAssignedUsers);
storeRouter.get('/usuarioasignado/:id', getAssignedUserById);
storeRouter.put('/usuarioasignado/:id', updateAssignedUser);
storeRouter.delete('/usuarioasignado/:id', deleteAssignedUser);

module.exports = storeRouter;