import { createContext, useState } from 'react';
import { ID } from 'appwrite';
import type { UserContextType, UserProviderProps } from 'types';
import { account } from 'lib/appwrite';

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({
	children,
}: UserProviderProps): React.JSX.Element => {
	const [user, setUser] = useState<UserContextType['user']>(null);

	const login = async (email: string, password: string): Promise<void> => {
		try {
			await account.createEmailPasswordSession({ email, password });
			const res = await account.get();
			setUser(res);
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};

	const register = async (email: string, password: string): Promise<void> => {
		try {
			await account.create({ userId: ID.unique(), email, password });
			login(email, password);
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};

	const logout = async (): Promise<void> => {};

	return (
		<UserContext.Provider value={{ user, login, logout, register }}>
			{children}
		</UserContext.Provider>
	);
};
