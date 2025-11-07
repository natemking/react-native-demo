import { CompositionalComponent } from 'types/components';

export type UserContextType = {
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: (email: string, password: string) => Promise<void>;
    register: () => Promise<void>;
}

export type UserProviderProps = CompositionalComponent