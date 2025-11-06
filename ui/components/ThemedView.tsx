import { View } from 'react-native';
import type { ThemedViewProps } from 'types';
import { useTheme } from 'hooks';

export const ThemedView = ({
	style,
	...props
}: ThemedViewProps): React.JSX.Element => {
	const theme = useTheme();
	const { background } = theme;

	return <View style={[{ backgroundColor: background }, style]} {...props} />;
};
