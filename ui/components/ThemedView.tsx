import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ThemedViewProps } from 'types';
import { useTheme } from 'hooks';

export const ThemedView = ({
	safe = false,
	style,
	...props
}: ThemedViewProps): React.JSX.Element => {
	const insets = useSafeAreaInsets();
	const { bottom, left, right, top } = insets;

	const theme = useTheme();
	const { background } = theme;

	return (
		<View
			style={[
				{
					backgroundColor: background,
					paddingBottom: safe ? bottom : undefined,
					paddingLeft: safe ? left : undefined,
					paddingRight: safe ? right : undefined,
					paddingTop: safe ? top : undefined,
				},
				style,
			]}
			{...props}
		/>
	);
};
