import { Text } from 'react-native';
import { useTheme } from 'hooks';
import type { ThemedTextProps } from 'types';

export const ThemedText = ({
	style,
	isTitle = false,
	...props
}: ThemedTextProps) => {
	const theme = useTheme();
	const { text, title } = theme;

	const textColor = isTitle ? title : text;

	return <Text style={[{ color: textColor }, style]} {...props} />;
};
