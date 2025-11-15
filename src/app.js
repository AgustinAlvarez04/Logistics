import express from "express";
import cors from "cors";
import testRouter from "./routes/testRouter.js";
import clientesRouter from "./routes/clientesRouter.js";
import productosRouter from "./routes/productosRouter.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/", testRouter);
app.use("/clientes", clientesRouter);
app.use("/productos", productosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
