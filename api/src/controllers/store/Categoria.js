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
exports.getAllCategories = async (req,res) => {
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

exports.getCategoryById = async (req,res) => {
    const { id } = req.params;
    try {
        const category = await Categoria.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.updateCategory = async (req,res) => {    
    const { id } = req.params;
    const { name } = req.body;
    try {
        const category = await Categoria.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        category.name = name;
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.deleteCategory = async (req,res) => {
    const { id } = req.params;
    try {
        const category = await Categoria.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.destroy();
        res.status(200).json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

