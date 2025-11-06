import { StyleSheet, View } from 'react-native';
import type { ThemedCardProps, ThemedViewProps } from 'types';
import { useTheme } from 'hooks';

const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		padding: 20,
	},
});

export const ThemedCard = ({
	children,
	style,
	...props
}: ThemedCardProps): React.JSX.Element => {
	const theme = useTheme();

	const { uiBackground } = theme;
	const { card } = styles;

	return (
		<View
			style={[{ borderBlockColor: uiBackground }, card, style]}
			{...props}
		>
			{children}
		</View>
	);
};
