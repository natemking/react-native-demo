import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { UserOnly } from 'components/auth/UserOnly';
import { useTheme } from 'hooks';

export default function DashboardLayout(): React.JSX.Element {
	const theme = useTheme();

	const { navBackground, iconColor, iconColorFocused } = theme;

	return (
		<UserOnly>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: navBackground,
						paddingTop: 10,
						height: 90,
					},
					tabBarActiveTintColor: iconColorFocused,
					tabBarInactiveTintColor: iconColor,
				}}
			>
				<Tabs.Screen
					name='profile'
					options={{
						title: 'Profile',
						tabBarIcon: ({ focused }) => (
							<Ionicons
								color={focused ? iconColorFocused : iconColor}
								name={focused ? 'person' : 'person-outline'}
								size={24}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='books'
					options={{
						title: 'Books',
						tabBarIcon: ({ focused }) => (
							<Ionicons
								color={focused ? iconColorFocused : iconColor}
								name={focused ? 'book' : 'book-outline'}
								size={24}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='create'
					options={{
						title: 'Create',
						tabBarIcon: ({ focused }) => (
							<Ionicons
								color={focused ? iconColorFocused : iconColor}
								name={focused ? 'create' : 'create-outline'}
								size={24}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='books/[id]'
					options={{
						href: null,
					}}
				/>
			</Tabs>
		</UserOnly>
	);
}
