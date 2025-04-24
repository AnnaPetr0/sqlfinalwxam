import { Request, Response } from 'express';
import { pool } from '../db';

export const getAllOrderItems = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM OrderItems');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error });
  }
};

export const createOrderItem = async (req: Request, res: Response) => {
  const { orderID, snkID, quantity, unit_price } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO OrderItems (orderID, snkID, quantity, unit_price) VALUES (?, ?, ?, ?)',
      [orderID, snkID, quantity, unit_price]
    );
    res.status(201).json({ message: 'Order item created', itemID: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order item', details: error });
  }
};

export const updateOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { orderID, snkID, quantity, unit_price } = req.body;
  try {
    await pool.query(
      'UPDATE OrderItems SET orderID = ?, snkID = ?, quantity = ?, unit_price = ? WHERE ordItemID = ?',
      [orderID, snkID, quantity, unit_price, id]
    );
    res.json({ message: 'Order item updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order item', details: error });
  }
};

export const deleteOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM OrderItems WHERE ordItemID = ?', [id]);
    res.json({ message: 'Order item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order item', details: error });
  }
};
