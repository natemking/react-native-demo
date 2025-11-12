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

export type BookData = Models.DefaultRow & {
	title: string;
	author: string;
	description: string;
	userId: string;
};

export type BooksContextType = {
	books: BookData[];
	fetchBooks: () => Promise<void>;
	fetchBookById: (id: string) => Promise<BookData>;
	createBook: (
		data: Pick<BookData, 'author' | 'description' | 'title'>
	) => Promise<Models.DefaultRow>;
	deleteBookById: (id: string) => Promise<void>;
};
export type BooksProviderProps = CompositionalComponent;
