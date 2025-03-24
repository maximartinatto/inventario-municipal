const { Dispositivo, Sector, Reparaciones, Categoria, UsuarioAsignado} = require("../../db");

// post /dispositivo
exports.createDispositivo = async (req, res) => {
    try {
        const { tipo, marca, modelo, numeroSerie, procesador, ram, almacenamiento, tipoImpresora, toner, tecnologiaImpresion, sectorId, usuarioId, categoriaId, reparacionesId, fechaAdquisicion, fechaFinalizacionReparacion, estado } = req.body;
        // verificar si la categoria existe
        let categoria = await Categoria.findOne({
            where: {
                name: categoria
            }
        });
        if (!categoria) {
            categoria = await Categoria.create({
                name: categoria
            });
        }
        // verificar si el sector existe
        let sector = await Sector.findOne({
            where: {
                name: sector
            }
        });
        if (!sector) {
            sector = await Sector.create({
                name: sector
            });
        }
        // verificar si el usuario existe
        let usuario = await UsuarioAsignado.findOne({
            where: {
                name: usuario
            }
        });
        // verificar si necesita reparacion
        let reparaciones = null;
        if (reparacionesId) {
            reparaciones = await Reparaciones.findOne({
                where: {
                    id: reparacionesId
                }
            });
        }
        // crear dispositivo y relacionarlo con la categoria, sector, usuario y reparaciones
        const dispositivo = await Dispositivo.create({
            tipo,
            marca,
            modelo,
            numeroSerie,
            procesador,
            ram,
            almacenamiento,
            tipoImpresora,
            toner,
            tecnologiaImpresion,
            sectorId: sector.id,
            usuarioId: usuario.id,
            categoriaId: categoria.id,
            reparacionesId: reparaciones ? reparaciones.id : null,
            fechaAdquisicion,
            fechaFinalizacionReparacion,
            estado
        });
        res.status(200).json(dispositivo);

    } catch (error) {
        console.error('Error al crear el dispositivo', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// get /dispositivo
exports.getDispositivos = async (req, res) => {
    try {
        const dispositivos = await Dispositivo.findAll({
            include: [Sector, UsuarioAsignado, Categoria, Reparaciones]
        });
        res.status(200).json(dispositivos);
    } catch (error) {
        console.error('Error al obtener los dispositivos', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// get /dispositivo/:id
exports.getDispositivoById = async (req, res) => {
    try {
        const { id } = req.params;
        const dispositivo = await Dispositivo.findOne({
            where: {
                id
            },
            include: [Sector, UsuarioAsignado, Categoria, Reparaciones]
        });
        if (!dispositivo) {
            return res.status(404).json({ message: "Dispositivo not found" });
        }
        res.status(200).json(dispositivo);
    } catch (error) {
        console.error('Error al obtener el dispositivo', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// put /dispositivo/:id
exports.updateDispositivo = async (req, res) => {

    try {
        const { id } = req.params;
        const { tipo, marca, modelo, numeroSerie, procesador, ram, almacenamiento, tipoImpresora, toner, tecnologiaImpresion, sectorId, usuarioId, categoriaId, reparacionesId, fechaAdquisicion, fechaFinalizacionReparacion, estado } = req.body;
        const dispositivo = await Dispositivo.findOne({
            where: {
                id
            }
        });
        if (!dispositivo) {
            return res.status(404).json({ message: "Dispositivo not found" });
        }
        // verificar si la categoria existe
        let categoria = await Categoria.findOne({
            where: {
                name: categoria
            }
        });
        if (!categoria) {
            categoria = await Categoria.create({
                name: categoria
            });
        }
        // verificar si el sector existe
        let sector = await Sector.findOne({
            where: {
                name: sector
            }
        });
        if (!sector) {
            sector = await Sector.create({
                name: sector
            });
        }
        // verificar si el usuario existe
        let usuario = await UsuarioAsignado.findOne({
            where: {
                name: usuario
            }
        });
        // verificar si necesita reparacion
        let reparaciones = null;
        if (reparacionesId) {
            reparaciones = await Reparaciones.findOne({
                where: {
                    id: reparacionesId
                }
            });
        }
        // actualizar dispositivo y relacionarlo con la categoria, sector, usuario y reparaciones
        dispositivo.tipo = tipo;
        dispositivo.marca = marca;
        dispositivo.modelo = modelo;
        dispositivo.numeroSerie = numeroSerie;
        dispositivo.procesador = procesador;
        dispositivo.ram = ram;
        dispositivo.almacenamiento = almacenamiento;
        dispositivo.tipoImpresora = tipoImpresora;
        dispositivo.toner = toner;
        dispositivo.tecnologiaImpresion = tecnologiaImpresion;
        dispositivo.sectorId = sector.id;
        dispositivo.usuarioId = usuario.id;
        dispositivo.categoriaId = categoria.id;
        dispositivo.reparacionesId = reparaciones ? reparaciones.id : null;
        dispositivo.fechaAdquisicion = fechaAdquisicion;
        dispositivo.fechaFinalizacionReparacion = fechaFinalizacionReparacion;
        dispositivo.estado = estado;
        await dispositivo.save();
        res.status(200).json(dispositivo);
    }
    catch (error) {
        console.error('Error al actualizar el dispositivo', error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// delete /dispositivo/:id
exports.deleteDispositivo = async (req, res) => {
    try {
        const { id } = req.params;
        const dispositivo = await Dispositivo.findOne({
            where: {
                id
            }
        });
        if (!dispositivo) {
            return res.status(404).json({ message: "Dispositivo not found" });
        }
        await dispositivo.destroy();
        res.status(200).json({ message: "Dispositivo deleted" });
    } catch (error) {
        console.error('Error al eliminar el dispositivo', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// get /dispositivo/sector/:id
exports.getDispositivosBySector = async (req, res) => {
    try {
        const { id } = req.params;
        const dispositivos = await Dispositivo.findAll({
            where: {
                sectorId: id
            },
            include: [Sector, UsuarioAsignado, Categoria, Reparaciones]
        });
        res.status(200).json(dispositivos);
    } catch (error) {
        console.error('Error al obtener los dispositivos por sector', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// get /dispositivo/usuario/:id
exports.getDispositivosByUsuario = async (req, res) => {

    try {
        const { id } = req.params;
        const dispositivos = await Dispositivo.findAll({
            where: {
                usuarioId: id
            },
            include: [Sector, UsuarioAsignado, Categoria, Reparaciones]
        });
        res.status(200).json(dispositivos);
    } catch (error) {
        console.error('Error al obtener los dispositivos por usuario', error);
        res.status(500).json({ message: "Internal server error" });
    }
}