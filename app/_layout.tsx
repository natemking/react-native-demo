import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { colors } from 'styles/colors';

const RootLayout = (): React.JSX.Element => {
	const colorScheme = useColorScheme();
	const theme = colors[colorScheme ?? 'light'];
	const { navBackground, title } = theme;

	return (
		<>
			<StatusBar style='auto' />
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: navBackground },
					headerTintColor: title,
				}}
			>
				<Stack.Screen name='index' options={{ title: 'Home' }} />
			</Stack>
		</>
	);
};

export default RootLayout;
