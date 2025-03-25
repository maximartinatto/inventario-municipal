const { Reparaciones } = require('../../db');


// Get all reparaciones
exports.getAllReparations = async(req, res) => {
    try {
        const reparaciones = await Reparaciones.getAll();
        res.status(200).json(reparaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reparaciones', error });
    }
}

// Get a single reparacion by ID
exports.getReparationById = async(req, res) => {
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
exports.createReparation = async(req, res) => {
    try {
        const newReparacion = await Reparaciones.create(req.body);
        res.status(201).json(newReparacion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reparacion', error });
    }
}

// Update an existing reparacion
exports.updateReparation = async(req, res) => {
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
exports.deleteReparation = async(req, res) => {
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


