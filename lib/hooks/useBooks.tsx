import { useContext } from 'react';
import { BooksContextType,  } from 'types';
import { BooksContext } from 'context/booksContext';

export const useBooks = (): BooksContextType => {
    const booksContext = useContext(BooksContext)

    if (!booksContext) {
        throw new Error('useUser must be used w/in a BooksProvider')
    }

    return booksContext

}