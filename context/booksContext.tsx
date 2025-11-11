import { createContext, useEffect, useState } from 'react';
import { ID, Models, Permission, Query, Role } from 'appwrite';
import type {
	BookBaseData,
	BookData,
	BooksContextType,
	BooksProviderProps,
} from 'types';
import { tablesDB } from 'lib/appwrite';
import { useUser } from 'lib/hooks/useUser'; // import from lib to stop circular dep

const db = process.env.EXPO_PUBLIC_APPWRITE_DB_ID ?? '';
const booksTable = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID ?? '';

export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider = ({ children }: BooksProviderProps) => {
	const [books, setBooks] = useState<BooksContextType['books']>([]);
	const { user } = useUser();

	const baseReqValues = {
		databaseId: db,
		tableId: booksTable,
	};

	const fetchBooks = async () => {
		try {
			const res = await tablesDB.listRows<BookData>({
				...baseReqValues,
				queries: [Query.equal('userId', user?.$id ?? '')],
			});
			setBooks(res.rows);
		} catch (err) {
			throw new Error(
				err instanceof Error ? err.message : 'fetchBooks Error'
			);
		}
	};

	const fetchBookById = async (id: string): Promise<BookData> => {
		try {
			const res = await tablesDB.getRow<BookData>({
				...baseReqValues,
				rowId: id,
			});

			return res;
		} catch (err) {
			throw new Error(
				err instanceof Error ? err.message : 'fetchBookById Error'
			);
		}
	};

	const createBook = async (
		data: BookBaseData
	): Promise<Models.DefaultRow> => {
		try {
			const res = await tablesDB.createRow<BookData>({
				...baseReqValues,
				rowId: ID.unique(),
				data: { ...data, userId: user!.$id },
				permissions: [
					Permission.read(Role.user(user!.$id)),
					Permission.update(Role.user(user!.$id)),
					Permission.delete(Role.user(user!.$id)),
				],
			});

			if (res) {
				setBooks((prev) => [...prev, res]);
			}
			return res;
		} catch (err) {
			throw new Error(
				err instanceof Error ? err.message : 'createBook Error'
			);
		}
	};

	const deleteBookById = async (id: string) => {
		try {
            await tablesDB.deleteRow({
                ...baseReqValues,
                rowId: id
            })

            setBooks(prev => prev.filter(book => book.$id !== id))
		} catch (err) {
			throw new Error(
				err instanceof Error ? err.message : 'deleteBook Error'
			);
		}
	};

	useEffect(() => {
		user ? fetchBooks() : setBooks([]);
	}, [user]);

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
