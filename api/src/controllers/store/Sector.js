const { Sector } = require('../../db');


// Get all sectors
exports.getAllSectors = async(req, res) => {
    try {
        const sectors = await Sector.getAll();
        res.status(200).json(sectors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sectors', error });
    }
}

// Get a single sector by ID
exports.getSectorById = async(req, res) => {
    try {
        const { id } = req.params;
        const sector = await Sector.getById(id);
        if (!sector) {
            return res.status(404).json({ message: 'Sector not found' });
        }
        res.status(200).json(sector);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sector', error });
    }
}

// Create a new sector
exports.createSector = async(req, res) => {
    try {
        const newSector = await Sector.create(req.body);
        res.status(201).json(newSector);
    } catch (error) {
        res.status(500).json({ message: 'Error creating sector', error });
    }
}

// Update an existing sector
exports.updateSector = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedSector = await Sector.update(id, req.body);
        if (!updatedSector) {
            return res.status(404).json({ message: 'Sector not found' });
        }
        res.status(200).json(updatedSector);
    } catch (error) {
        res.status(500).json({ message: 'Error updating sector', error });
    }
}

// Delete a sector
exports.deleteSector = async(req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Sector.delete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Sector not found' });
        }
        res.status(200).json({ message: 'Sector deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting sector', error });
    }
}


