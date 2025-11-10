import { createContext, useState } from 'react';
import { ID, Models, Permission, Role } from 'appwrite';
import { tablesDB } from 'lib/appwrite';
import type {
	BookBaseData,
	BookData,
	BooksContextType,
	BooksProviderProps,
} from 'types';
import { useUser } from 'hooks';

const db = process.env.EXPO_PUBLIC_APPWRITE_DB_ID ?? '';
const booksTable = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID ?? '';

export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider = ({ children }: BooksProviderProps) => {
	const [books, setBooks] = useState<BooksContextType['books']>([]);
	const { user } = useUser();

	const fetchBooks = async () => {
		try {
		} catch (error) {}
	};

	const fetchBookById = async (id: string) => {
		try {
		} catch (error) {}
	};

	const createBook = async (
		data: BookBaseData
	): Promise<Models.DefaultRow> => {
		try {
			const res = await tablesDB.createRow({
				databaseId: db,
				tableId: booksTable,
				rowId: ID.unique(),
				data: { ...data, userId: user!.$id },
				permissions: [
					Permission.read(Role.user(user!.$id)),
					Permission.update(Role.user(user!.$id)),
					Permission.delete(Role.user(user!.$id)),
				],
			});

			return res;
		} catch (err) {
            throw new Error('err')
		}
	};

	const deleteBookById = async (id: string) => {
		try {
		} catch (error) {}
	};

	return (
		<BooksContext.Provider
			value={{
				books,
				fetchBooks,
				fetchBookById,
				createBook,
				deleteBookById,
			}}
		>
			{children}
		</BooksContext.Provider>
	);
};
