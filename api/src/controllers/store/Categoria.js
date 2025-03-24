const { Categoria } = require("../../db");


exports.createCategory = async (req,res) => {
    const { name } = req.body;
    try {
        const category = await Categoria.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}
exports.getCategories = async (req,res) => {
    try {
        const categories = await Categoria.findAll();

        if (categories.length === 0) {
            return res.status(404).json({ message: 'No Categories' });
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

