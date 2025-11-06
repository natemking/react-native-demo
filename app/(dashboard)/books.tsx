import { Spacer } from 'components/Spacer';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { globalStyles } from 'styles';

export default function BooksPage() {
	const { container, heading } = globalStyles;

	return (
		<ThemedView style={[container, { alignItems: 'stretch' }]}>
			<Spacer />
			<ThemedText isTitle style={heading}>
				Your Reading List
			</ThemedText>
		</ThemedView>
	);
}
