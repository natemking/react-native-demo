import { Image, useColorScheme } from 'react-native';


const ThemedLogo = () => {
	const colorScheme = useColorScheme();

	const logo =
		colorScheme === 'dark'
			? require('img/logo_dark.png')
			: require('img/logo_light.png');

	return (
		<Image source={logo}/>
	);
};

export default ThemedLogo;
