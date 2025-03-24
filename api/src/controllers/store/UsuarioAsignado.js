const { UsuarioAsignado } = require('../../db');

class UsuarioAsignadoController {
    // Get all assigned users
    async getAll(req, res) {
        try {
            const usuariosAsignados = await UsuarioAsignado.getAll();
            res.status(200).json(usuariosAsignados);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching assigned users', error });
        }
    }

    // Get a single assigned user by ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const usuarioAsignado = await UsuarioAsignado.getById(id);
            if (!usuarioAsignado) {
                return res.status(404).json({ message: 'Assigned user not found' });
            }
            res.status(200).json(usuarioAsignado);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching assigned user', error });
        }
    }

    // Create a new assigned user
    async create(req, res) {
        try {
            const newUsuarioAsignado = await UsuarioAsignado.create(req.body);
            res.status(201).json(newUsuarioAsignado);
        } catch (error) {
            res.status(500).json({ message: 'Error creating assigned user', error });
        }
    }

    // Update an existing assigned user
    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedUsuarioAsignado = await UsuarioAsignado.update(id, req.body);
            if (!updatedUsuarioAsignado) {
                return res.status(404).json({ message: 'Assigned user not found' });
            }
            res.status(200).json(updatedUsuarioAsignado);
        } catch (error) {
            res.status(500).json({ message: 'Error updating assigned user', error });
        }
    }

    // Delete an assigned user
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await UsuarioAsignado.delete(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Assigned user not found' });
            }
            res.status(200).json({ message: 'Assigned user deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting assigned user', error });
        }
    }
}


module.exports = new UsuarioAsignadoController();