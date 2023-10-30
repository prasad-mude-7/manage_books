import  {IBook, Books } from '../models/book.model';

export const getAllBooks = async (): Promise<IBook[]> => {
    return await Books.find().exec();
};

export const getBookById = async (id: string): Promise<IBook | null> => {
    let data = await Books.findById(id).exec();
    if(data){
        return data
    }
    else {
        return null
    }
};

export const addBook = async (book: IBook): Promise<IBook|null> => {
    const data = await Books.create(book);
    if(data){
        return data
    }
    else {
        return null
    }
};

export const updateBook = async (id: string, updatedBook: IBook): Promise<IBook | null> => {
    const data = await Books.findByIdAndUpdate(id, updatedBook, { new: true });
    if(data){
        return data
    }
    else {
        return null
    }
};

export const deleteBook = async (id: string): Promise<boolean> => {
    const data = await Books.deleteOne({ _id: id });
    if(data.deletedCount){
        return true
    }
    else {
        return false
    }
};
