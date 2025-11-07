import { useContext } from 'react';
import { UserContext } from 'context/userContext';
import { UserContextType } from 'types';

export const useUser = (): UserContextType => {
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw new Error('useUser must be used w/in a UserProvider')
    }

    return userContext

}