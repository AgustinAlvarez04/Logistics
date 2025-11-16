import { Router } from 'express';
import { getOrdenes, getOrdenId, postOrden, putOrden, deleteOrden } from '../controllers/ordenes.controller.js';

const router = Router();

router.get('/', getOrdenes);
router.get('/:id', getOrdenId);
router.post('/', postOrden);
router.put('/:id', putOrden);
router.delete('/:id', deleteOrden);

export default router;