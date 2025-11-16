import pool from "../config/db.js";

export const obtenerProductos = async () => {
    const [rows] = await pool.query("SELECT * FROM productos");
    return rows;
};

export const obtenerProductoId = async (id) => {
    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [id]);
    return rows[0];
};

export const crearProducto = async (nombre, descripcion, precio, stock) => {
    const [result] = await pool.query(
        "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)",
        [nombre, descripcion, precio, stock]
    );
    return { id: result.insertId };
};

export const actualizarProducto = async (id, nombre, descripcion, precio, stock) => {
    await pool.query(
        "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?",
        [nombre, descripcion, precio, stock, id]);
};

export const eliminarProducto = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM productos WHERE id = ?",
        [id]
    );

    return result.affectedRows; // 1 si borró, 0 si no existía
};
