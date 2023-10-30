import { Request, Response } from 'express';
import * as bookService from '../services/book.service';
import  {IBook, Books } from '../models/book.model';

export const getAllBooks = async(req: Request, res: Response) => {
    const books = await bookService.getAllBooks();
    return res.json(books);
};

export const getBookById = async(req: Request, res: Response) => {
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    if (book) {
        return res.json(book);
    } else {
        return res.status(404).json({ message: 'Book not found' });
    }
};

export const addBook = async(req: Request, res: Response) => {
    const book_detail = req.body;
    const book = await bookService.addBook(book_detail);
    res.status(201).json({ message: 'Book added successfully' });
};

export const updateBook = async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedBook = req.body;
    const book = await bookService.updateBook(id, updatedBook);
    if (book) {
        res.json({ message: 'Book updated successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    const id = req.params.id;
    const success = await bookService.deleteBook(id);
    if (success) {
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};
