import { View, Text, useColorScheme } from 'react-native';
import { colors } from 'styles/colors';

const ThemedView = () => {
	const colorScheme = useColorScheme();
	const theme = colors[colorScheme ?? 'light'];
	const { background } = theme;

	return (
		<View style={[{ backgroundColor: background }]}>
			<Text>ThemedView</Text>
		</View>
	);
};

export default ThemedView;
