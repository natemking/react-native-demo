import { StyleSheet } from 'react-native';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { Spacer } from 'components/Spacer';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
	},
});
export default function CreatePage() {
	const { container, heading } = styles;
	return (
		<ThemedView style={container}>
			<ThemedText isTitle style={heading}>
				Add a New Book
			</ThemedText>
			<Spacer />
		</ThemedView>
	);
}
