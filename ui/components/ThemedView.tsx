import { View, Text, useColorScheme } from 'react-native';
import { colors } from 'styles/colors';
import { ThemedViewProps } from 'types';

const ThemedView = ({ style }: ThemedViewProps) => {
	const colorScheme = useColorScheme();
	const theme = colors[colorScheme ?? 'light'];
	const { background } = theme;

	return (
		<View style={[{ backgroundColor: background }, style]}>
			<Text>ThemedView</Text>
		</View>
	);
};

export default ThemedView;
