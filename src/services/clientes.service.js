import pool from "../config/db.js";

export const obtenerClientes = async () => {
  const [rows] = await pool.query("SELECT * FROM clientes");
  return rows;
};

export const obtenerClienteId = async (id) => {
    const [rows] = await pool.query("SELECT * FROM clientes WHERE id = ?", [id]);
    return rows[0];
};

export const crearCliente = async (nombre, direccion, telefono, email) => {
  const [result] = await pool.query(
    "INSERT INTO clientes (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)",
    [nombre, direccion, telefono, email]
  );
  return { id: result.insertId };
};

export const actualizarCliente = async (id, nombre, direccion, telefono, email) => {
  await pool.query(
    "UPDATE clientes SET nombre=?, direccion=?, telefono=?, email=? WHERE id=?",
    [nombre, email, telefono, direccion, id]
  );
};

export const eliminarCliente = async (id) => {
  await pool.query("DELETE FROM clientes WHERE id=?", [id]);
};
