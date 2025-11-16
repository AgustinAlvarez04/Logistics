import express from "express";
import cors from "cors";
import testRouter from "./routes/testRouter.js";
import clientesRouter from "./routes/clientes.router.js";
import productosRouter from "./routes/productos.router.js";
import ordenesRouter from "./routes/ordenes.router.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/", testRouter);
app.use("/clientes", clientesRouter);
app.use("/productos", productosRouter);
app.use("/ordenes", ordenesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
