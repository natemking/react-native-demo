import { View } from 'react-native';
import type { ThemedCardProps, ThemedViewProps } from 'types';
import { useTheme } from 'hooks';
import { globalStyles } from 'styles';


export const ThemedCard = ({
	children,
	style,
	...props
}: ThemedCardProps): React.JSX.Element => {
	const theme = useTheme();

	const { uiBackground } = theme;
	const { card } = globalStyles

	return (
		<View
			style={[{ borderBlockColor: uiBackground }, card, style]}
			{...props}
		>
			{children}
		</View>
	);
};
