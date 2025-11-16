import { 
    obtenerOrdenes,
    obtenerOrdenId,
    crearOrden,
    actualizarOrden,
    eliminarOrden 
} from "../services/ordenes.service.js";

export const getOrdenes = async (req, res) => {
    try{
        const ordenes = await obtenerOrdenes();
        res.json(ordenes);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener ordenes" });
    }
};

export const getOrdenId = async (req, res) => {
    const { id } = req.params;
    try {
        const orden = await obtenerOrdenId(id);
        if (!orden) {
            return res.status(404).json({ error: "Orden no encontrada" });
        }
        res.json(orden);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener orden" });
    }
}

export const postOrden = async (req, res) => {
    try {
        const { cliente_id } = req.body;
    if (!cliente_id) {
        return res.status(404).json({ error: "Cliente ID es requerido" });
    }
    const nuevaOrden = await crearOrden(cliente_id);
    res.json({ mensaje: "Orden creada", orden: nuevaOrden });
    } catch (err) {
        res.status(500).json({ error: "Error al crear orden" });
    }
}

export const putOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        await actualizarOrden(id, estado);
        res.json({ mensaje: "Orden actualizada" });
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar orden" });
    }
};

export const deleteOrden = async (req, res) => {
    try {
        const { id } = req.params;
        await eliminarOrden(id);
        res.json({ mensaje: "Orden eliminada" });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar orden" });
    }
};