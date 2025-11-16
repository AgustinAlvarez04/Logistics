import pool from "../config/db.js";

export const obtenerOrdenes = async () =>{
    const [rows] = await pool.query("SELECT * FROM ordenes");
    return rows;
}

export const obtenerOrdenId = async (id) =>{
    const [rows] = await pool.query("SELECT * FROM ordenes WHERE id = ?", [id]);
    return rows[0];
}

export const crearOrden = async (cliente_id) => {
    const [result] = await pool.query(
    "INSERT INTO ordenes (cliente_id) VALUES (?)",
    [cliente_id]);
    return { id: result.insertId };
};


export const actualizarOrden = async (id, estado) => {
    await pool.query(
        "UPDATE ordenes SET estado = ? WHERE id = ?",
        [estado, id]);
};

export const eliminarOrden = async (id) =>{
    await pool.query("DELETE FROM ordenes WHERE id = ?", [id])
}