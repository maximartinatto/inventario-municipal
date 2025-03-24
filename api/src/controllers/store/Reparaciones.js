const { Reparaciones } = require('../../db');

class ReparacionesController {
    // Get all reparaciones
    async getAll(req, res) {
        try {
            const reparaciones = await Reparaciones.getAll();
            res.status(200).json(reparaciones);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching reparaciones', error });
        }
    }

    // Get a single reparacion by ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const reparacion = await Reparaciones.getById(id);
            if (!reparacion) {
                return res.status(404).json({ message: 'Reparacion not found' });
            }
            res.status(200).json(reparacion);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching reparacion', error });
        }
    }

    // Create a new reparacion
    async create(req, res) {
        try {
            const newReparacion = await Reparaciones.create(req.body);
            res.status(201).json(newReparacion);
        } catch (error) {
            res.status(500).json({ message: 'Error creating reparacion', error });
        }
    }

    // Update an existing reparacion
    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedReparacion = await Reparaciones.update(id, req.body);
            if (!updatedReparacion) {
                return res.status(404).json({ message: 'Reparacion not found' });
            }
            res.status(200).json(updatedReparacion);
        } catch (error) {
            res.status(500).json({ message: 'Error updating reparacion', error });
        }
    }

    // Delete a reparacion
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Reparaciones.delete(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Reparacion not found' });
            }
            res.status(200).json({ message: 'Reparacion deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting reparacion', error });
        }
    }
}

module.exports = new ReparacionesController();