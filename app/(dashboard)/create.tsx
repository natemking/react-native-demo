import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { Spacer } from 'components/Spacer';
import { globalStyles } from 'styles';


export default function CreatePage() {
	const { container, heading } = globalStyles;
	return (
		<ThemedView style={container}>
			<ThemedText isTitle style={heading}>
				Add a New Book
			</ThemedText>
			<Spacer />
		</ThemedView>
	);
}
