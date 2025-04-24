import express from 'express';
import {
  getAllOrderItems,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem
} from '../controllers/orderItemsController';

const router = express.Router();

router.get('/', getAllOrderItems);
router.post('/', createOrderItem);
router.put('/:id', updateOrderItem);
router.delete('/:id', deleteOrderItem);

export default router;
