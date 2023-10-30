import {Router} from "express";
import * as bookController from '../controllers/book.controller'

const router = Router()

router.get('/api/book/', bookController.getAllBooks);
router.get('/api/book/:id', bookController.getBookById);
router.post('/api/book/', bookController.addBook);
router.put('/api/book/:id', bookController.updateBook);
router.delete('/api/book/:id', bookController.deleteBook);

export default router;