import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const RootLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: 'hsl(0, 0%, 87%)' },
                headerTintColor: 'hsl(0, 0%, 20%)'
			}}
		>
			<Stack.Screen name='index' options={{ title: 'Home' }} />
			<Stack.Screen name='about' options={{ title: 'About Page' }} />
			<Stack.Screen name='contact' options={{ title: 'Contact Page' }} />
		</Stack>
	);
};

export default RootLayout;
