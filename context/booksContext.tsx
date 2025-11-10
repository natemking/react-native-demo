import { createContext, useState } from 'react';
import type { BookData, BooksContextType, BooksProviderProps } from 'types';

const db = process.env.EXPO_PUBLIC_APPWRITE_DB_ID
const booksTable = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID

export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider = ({ children }: BooksProviderProps ) => {
    const [books, setBooks] = useState<BooksContextType['books']>([]);

    const fetchBooks = async () => {
        try {
            
        } catch (error) {
            
        }
    }

    const fetchBookById = async (id: string) => {
        try {
            
        } catch (error) {
            
        }
    }

    const createBook = async (data: BookData) => {
        try {
            
        } catch (error) {
            
        }
    }

    const deleteBookById = async (id: string) => {
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <BooksContext.Provider
            value={{
                books,
                fetchBooks,
                fetchBookById,
                createBook,
                deleteBookById
            }}
        >
            { children }
        </BooksContext.Provider>
    )

}