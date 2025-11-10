import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { ThemedLoader } from 'components/ThemedLoader';
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
            <ThemedLoader />
        )
    }

	return <>{children}</>;
};
