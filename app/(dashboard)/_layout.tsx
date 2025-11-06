import { Tabs } from 'expo-router';
import { useTheme } from 'hooks';

export default function DashboardLayout(): React.JSX.Element {
    const theme = useTheme();

    const { navBackground, iconColor, iconColorFocused } = theme;

	return (
		<Tabs 
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: navBackground,
                    paddingTop: 10,
                    height: 90
                },
                tabBarActiveTintColor: iconColorFocused,
                tabBarInactiveTintColor: iconColor
            }}
        >
            <Tabs.Screen name='books' options={{ title: 'Books' }}/>
            <Tabs.Screen name='create' options={{ title: 'Create' }}/>
            <Tabs.Screen name='profile' options={{ title: 'Profile' }}/>
        </Tabs>
	);
};
