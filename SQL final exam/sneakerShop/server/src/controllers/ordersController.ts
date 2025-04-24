import { Request, Response } from 'express';
import { pool } from '../db';

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Orders');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { userID, order_date, total_price } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Orders (userID, order_date, total_price) VALUES (?, ?, ?)',
      [userID, order_date, total_price]
    );
    res.status(201).json({ message: 'Order created', orderID: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order', details: error });
  }
};


export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userID, order_date, total_price } = req.body;
  try {
    await pool.query(
      'UPDATE Orders SET userID = ?, order_date = ?, total_price = ? WHERE orderID = ?',
      [userID, order_date, total_price, id]
    );
    res.json({ message: 'Order updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order', details: error });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Orders WHERE orderID = ?', [id]);
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order', details: error });
  }
};
