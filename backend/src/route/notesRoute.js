import express from 'express';
import { getAllNotes, createNotes, deleteNotes, updateNotes ,geNotesById} from '../contreoller/notesController.js';
const router=express.Router();
router.get('/',getAllNotes)
router.get('/:id',geNotesById)
router.post('/',createNotes)
router.put('/:id',updateNotes)
router.delete('/:id',deleteNotes)
export default router;