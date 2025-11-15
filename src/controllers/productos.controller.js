import {
    obtenerProductos,
    obtenerProductoId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../services/productosService.js";

export const getProductos = async (req, res) => {
    try {
        const productos = await obtenerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};

export const getProductoById = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await obtenerProductoId(id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

export const postProducto = async (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    try {
        const nuevoId = await crearProducto(nombre, descripcion, precio, stock);
        res.json({ mensaje: "Producto creado", id: nuevoId });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el producto" });
    }
};

export const putProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock } = req.body;
    try {
        const filasAfectadas = await actualizarProducto(id, nombre, descripcion, precio, stock);
        if (filasAfectadas === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
};

export const deleteProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const filasAfectadas = await eliminarProducto(id);
        if (filasAfectadas === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
};
