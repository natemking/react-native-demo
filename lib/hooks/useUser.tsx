import { useContext } from 'react';
import type { UserContextType } from 'types';
import { UserContext } from 'context/userContext';

export const useUser = (): UserContextType => {
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw new Error('useUser must be used w/in a UserProvider')
    }

    return userContext

}