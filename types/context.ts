import { Models } from 'appwrite';
import { CompositionalComponent } from 'types/components';

export type UserContextType = {
    user: Models.User | null;
    authChecked: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

export type UserProviderProps = CompositionalComponent