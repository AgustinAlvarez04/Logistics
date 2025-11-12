import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT COUNT(*) AS total_clientes FROM clientes");
    res.json({ ok: true, resultado: rows[0].total_clientes });
  } catch (error) {
    console.error("Error al conectar a la BD:", error);
    res.json({ ok: false, error: "Error al conectar a la BD" });
  }
});

export default router;
