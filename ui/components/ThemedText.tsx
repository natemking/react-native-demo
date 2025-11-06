import { Text } from 'react-native';
import { useTheme } from 'hooks';
import type { ThemedTextProps } from 'types';

export const ThemedText = ({
	style,
	title = false,
	...props
}: ThemedTextProps) => {
	const theme = useTheme();

	const textColor = title ? theme.title : theme.text;

	return <Text style={[{ color: textColor }, style]} {...props} />;
};
