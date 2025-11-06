import { useColorScheme } from 'react-native';
import { colors } from 'styles';

export function useTheme(): typeof colors.light | typeof colors.dark {
	const colorScheme = useColorScheme();
	const theme = colors[colorScheme ?? 'light'];

	return theme;
}
