import express from 'express';
import {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from '../controllers/ordersController';

const router = express.Router();

router.get('/', getAllOrders);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
