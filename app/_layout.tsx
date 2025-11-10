import { BooksProvider } from 'context/booksContext';
import { UserProvider } from 'context/userContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'hooks';

export default function RootLayout(): React.JSX.Element {
	const theme = useTheme();
	const { navBackground, title } = theme;

	return (
		<UserProvider>
			<BooksProvider>
				<StatusBar style='auto' />
				<Stack
					screenOptions={{
						headerStyle: { backgroundColor: navBackground },
						headerTintColor: title,
					}}
				>
					<Stack.Screen
						name='(auth)'
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='(dashboard)'
						options={{ headerShown: false }}
					/>
					<Stack.Screen name='index' options={{ title: 'Home' }} />
				</Stack>
			</BooksProvider>
		</UserProvider>
	);
}
