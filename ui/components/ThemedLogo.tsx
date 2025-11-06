import { Image, useColorScheme } from 'react-native';
import type { ThemedLogoProps } from 'types';

export const ThemedLogo = ({
	...props
}: ThemedLogoProps): React.JSX.Element => {
	const colorScheme = useColorScheme();

	const logo =
		colorScheme === 'dark'
			? require('img/logo_dark.png')
			: require('img/logo_light.png');

	return <Image source={logo} {...props} />;
};
