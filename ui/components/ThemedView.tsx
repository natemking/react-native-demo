import { View } from 'react-native';
import type { ThemedViewProps } from 'types';
import { useTheme } from 'hooks';

const ThemedView = ({ style, ...props }: ThemedViewProps) => {
	const theme = useTheme()
	const { background } = theme;

	return <View style={[{ backgroundColor: background }, style]} {...props} />;
};

export default ThemedView;
