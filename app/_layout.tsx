import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { colors } from 'styles/colors'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light']
    const { navBackground, title  } = theme;

	return (
		<>
        <StatusBar style='auto'/>
		    <Stack
    			screenOptions={{
    				headerStyle: { backgroundColor: navBackground },
                    headerTintColor: title
    			}}
    		>
    			<Stack.Screen name='index' options={{ title: 'Home' }} />
    			<Stack.Screen name='about' options={{ title: 'About Page' }} />
    			<Stack.Screen name='contact' options={{ title: 'Contact Page' }} />
    		</Stack>
		</>
	);
};

export default RootLayout;
