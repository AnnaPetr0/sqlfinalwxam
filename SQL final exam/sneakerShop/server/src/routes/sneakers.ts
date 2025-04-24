import express from 'express';
import {
  getAllSneakers,
  createSneaker,
  updateSneaker,
  deleteSneaker
} from '../controllers/sneakersController';

const router = express.Router();

router.get('/', getAllSneakers);
router.post('/', createSneaker);
router.put('/:id', updateSneaker);
router.delete('/:id', deleteSneaker);

export default router;