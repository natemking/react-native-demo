import { createContext, useState } from 'react';
import type { UserContextType, UserProviderProps } from 'types';


export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({
	children,
}: UserProviderProps): React.JSX.Element => {
	const [user, setUser] = useState<string | null>(null);

	const register = async (email: string, password: string) => {
		return;
	};

	const login = async (email: string, password: string) => {
		return;
	};

	const logout = async () => {

    };

	return (
		<UserContext.Provider value={{ user, login, logout, register }}>
			{children}
		</UserContext.Provider>
	);
};
