import { Request, Response } from 'express';
import { pool } from '../db';

export const getWishlist = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        Wishlist.wishID, 
        Wishlist.userID,
        Wishlist.snkID,
        Wishlist.date_added,
        Users.name,
        Wishlist.image_url
      FROM wishlist
      JOIN Users ON wishlist.userID = Users.userID
      JOIN Sneakers ON wishlist.snkID = Sneakers.snkID
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error });
  }
};

export const addToWishlist = async (req: Request, res: Response) => {
  const { userID, snkID, date_added , image_url} = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Wishlist (userID, snkID, date_added,image_url) VALUES (?, ?, ?)',
      [userID, snkID, date_added,image_url]
    );
    res.status(201).json({ message: 'Item added to wishlist', wishID: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to wishlist', details: error });
  }
};

export const removeFromWishlist = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Wishlist WHERE wishID = ?', [id]);
    res.json({ message: 'Item removed from wishlist' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete wishlist item', details: error });
  }
};
