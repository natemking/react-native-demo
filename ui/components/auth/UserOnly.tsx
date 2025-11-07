import { useEffect } from 'react';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import type { UserOnlyProps } from 'types';
import { useUser } from 'hooks';
import { loginUrl } from 'lib/constants';

export const UserOnly = ({ children }: UserOnlyProps): React.JSX.Element => {
	const { authChecked, user } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (authChecked && user === null) {
			router.replace(loginUrl);
		}
	}, [authChecked, user]);

    if (!authChecked || !user) {
        return (
            <Text>Loading...</Text>
        )
    }

	return <>{children}</>;
};
