import { Request, Response } from 'express';
import { pool } from '../db';

export const getAllSneakers = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Sneakers');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error });
  }
};

export const createSneaker = async (req: Request, res: Response) => {
  const { brand, model, size, price, image_URL, description } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Sneakers (brand, model, size, price, image_URL, description) VALUES (?, ?, ?, ?, ?, ?)',
      [brand, model, size, price, image_URL, description]
    );
    res.status(201).json({ message: 'Sneaker created', sneakerId: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create sneaker', details: error });
  }
};

// PUT update sneaker
export const updateSneaker = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { brand, model, size, price, image_URL, description } = req.body;
  try {
    await pool.query(
      'UPDATE Sneakers SET brand = ?, model = ?, size = ?, price = ?, image_URL = ?, description = ? WHERE snkID = ?',
      [brand, model, size, price, image_URL, description, id]
    );
    res.json({ message: 'Sneaker updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update sneaker', details: error });
  }
};

export const deleteSneaker = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Sneakers WHERE snkID = ?', [id]);
    res.json({ message: 'Sneaker deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete sneaker', details: error });
  }
};