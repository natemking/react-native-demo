import { CompositionalComponent } from 'types/components';

export type UserContextType = {
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

export type UserProviderProps = CompositionalComponent