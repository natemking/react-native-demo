import { ActivityIndicator } from 'react-native';
import { ThemedView } from 'components/ThemedView';
import { useTheme } from 'hooks';
import { globalStyles } from 'styles';

export function ThemedLoader() {
	const theme = useTheme();

	const { text } = theme;
	const { container } = globalStyles;

	return (
		<ThemedView style={container}>
			<ActivityIndicator size='large' color={text} />
		</ThemedView>
	);
}
