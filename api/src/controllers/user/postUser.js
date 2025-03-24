const bcrypt = require('bcrypt');
const { User, Dispositivo } = require("../../db");

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existUser = await User.findOne({ where: { email } });
        if (existUser){
            return res.status(404).json({
                success: false,
                message: "El usuario ya existe"
            });
        }
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create ({
            email,
            password: hash
        })

        const newDispositivo = await Dispositivo.create({
            userId: newUser.id
        })
        return res.status(201).json({
            success: true,
            message: "Usuario creado exitosamente",
            data: newUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el usuario",
            error: error.message
        });
    }
}