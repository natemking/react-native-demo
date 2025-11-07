import { createContext, useState } from 'react';
import { ID } from 'appwrite';
import type { UserContextType, UserProviderProps } from 'types';
import { account } from 'lib/appwrite';

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({
	children,
}: UserProviderProps): React.JSX.Element => {
	const [user, setUser] = useState<UserContextType['user']>(null);

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailPasswordSession({ email, password });
			const res = await account.get();
			setUser(res);
		} catch (err) {
			console.log(err);
		}
	};

	const register = async (email: string, password: string) => {
		try {
			await account.create({ userId: ID.unique(), email, password });
			login(email, password);
		} catch (err) {
			console.log(err);
		}
	};

	const logout = async () => {};

	return (
		<UserContext.Provider value={{ user, login, logout, register }}>
			{children}
		</UserContext.Provider>
	);
};
