import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { Spacer } from 'components/Spacer';
import { globalStyles } from 'styles';

export default function ProfilePage() {
	const { container, heading } = globalStyles;
	return (
		<ThemedView style={container}>
			<ThemedText isTitle style={heading}>
				Your Email
			</ThemedText>
			<Spacer />

			<ThemedText>Time to start reading some books...</ThemedText>
			<Spacer />
		</ThemedView>
	);
}
