import { Models } from 'appwrite';
import { CompositionalComponent } from 'types/components';

export type UserContextType = {
	user: Models.User | null;
	authChecked: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
};

export type UserProviderProps = CompositionalComponent;

export type BookData = {
	title: string;
	author: string;
	description: string;
	userId: string;
};

export type BookType = BookData & {
	id: string;
	createdAt: Date;
	updatedAt: Date;
};

export type BooksContextType = {
	books: BookType[];
	fetchBooks: () => Promise<void>;
	fetchBookById: (id: string) => Promise<void>;
    createBook: (data: BookData) => Promise<void>;
    deleteBookById: (id: string) => Promise<void>;
};
export type BooksProviderProps = CompositionalComponent;
