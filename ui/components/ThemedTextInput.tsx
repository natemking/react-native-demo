import { TextInput } from 'react-native';
import type { ThemeTextInputProps } from 'types';
import { useTheme } from 'hooks';

export const ThemedTextInput = ({
	style,
	...props
}: ThemeTextInputProps): React.JSX.Element => {
	const theme = useTheme();
	const { text, uiBackground } = theme;

	return (
		<TextInput
			style={[
				{
					backgroundColor: uiBackground,
					color: text,
					padding: 20,
					borderRadius: 6,
				},
				style,
			]}
			{...props}
		/>
	);
};
