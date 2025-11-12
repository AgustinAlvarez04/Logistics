
import {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from "../services/clientesService.js";

export const getClientes = async (req, res) => {
  try {
    const clientes = await obtenerClientes();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

export const postCliente = async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;
    const nuevo = await crearCliente(nombre, email, telefono);
    res.status(201).json({ mensaje: "Cliente creado", id: nuevo.id });
  } catch (err) {
    res.status(500).json({ error: "Error al crear cliente" });
  }
};

export const putCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    await actualizarCliente(id, nombre, email, telefono);
    res.json({ mensaje: "Cliente actualizado" });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar cliente" });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarCliente(id);
    res.json({ mensaje: "Cliente eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar cliente" });
  }
};
