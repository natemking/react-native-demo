import { Spacer } from 'components/Spacer';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
	},
});

export default function BooksPage() {
	const { container, heading } = styles;
    
	return (
		<ThemedView style={container}>
			<Spacer />
			<ThemedText isTitle style={heading}>
				Your Reading List
			</ThemedText>
		</ThemedView>
	);
}
