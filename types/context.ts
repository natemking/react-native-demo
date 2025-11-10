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

export type BookBaseData = {
	title: string;
	author: string;
	description: string;
};

export type BookData = BookBaseData & {
	userId: string;
};

export type BookModel = BookData & {
	id: string;
	createdAt: Date;
	updatedAt: Date;
};

export type BooksContextType = {
	books: BookModel[];
	fetchBooks: () => Promise<void>;
	fetchBookById: (id: string) => Promise<void>;
	createBook: (data: BookBaseData) => Promise<Models.DefaultRow>;
	deleteBookById: (id: string) => Promise<void>;
};
export type BooksProviderProps = CompositionalComponent;
