import pool from "../config/db.js";

export const obtenerClientes = async () => {
  const [rows] = await pool.query("SELECT * FROM clientes");
  return rows;
};

export const obtenerClienteId = async (id) => {
    const [rows] = await pool.query("SELECT * FROM clientes WHERE id = ?", [id]);
    return rows[0];
};

export const crearCliente = async (nombre, email, telefono) => {
  const [result] = await pool.query(
    "INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)",
    [nombre, email, telefono]
  );
  return { id: result.insertId };
};

export const actualizarCliente = async (id, nombre, email, telefono) => {
  await pool.query(
    "UPDATE clientes SET nombre=?, email=?, telefono=? WHERE id=?",
    [nombre, email, telefono, id]
  );
};

export const eliminarCliente = async (id) => {
  await pool.query("DELETE FROM clientes WHERE id=?", [id]);
};
