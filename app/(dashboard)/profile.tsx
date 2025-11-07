import { Spacer } from 'components/Spacer';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { useUser } from 'hooks';
import { colors, globalStyles } from 'styles';
import { ThemedBtn } from 'components/ThemedBtn';
import { Text } from 'react-native';

export default function ProfilePage() {
	const { container, heading } = globalStyles;

	const { logout } = useUser();

	return (
		<ThemedView style={container}>
			<ThemedText isTitle style={heading}>
				Your Email
			</ThemedText>
			<Spacer />

			<ThemedText>Time to start reading some books...</ThemedText>
			<Spacer />
			<ThemedBtn onPress={logout}>
				<Text style={{ color: colors.primaryForeground }}>Logout</Text>
			</ThemedBtn>
		</ThemedView>
	);
}
