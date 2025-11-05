import { StyleSheet, View } from 'react-native';
import type { ThemedViewProps } from 'types';
import { useTheme } from 'hooks';

const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		padding: 20,
	},
});

const ThemedCard = ({ style, ...props }: ThemedViewProps) => {
	const theme = useTheme();

	const { uiBackground } = theme;
    const { card } = styles

	return (
        <View 
            style={[ { borderBlockColor: uiBackground}, card, style]}
            {...props}
        />
    );
};

export default ThemedCard;
