import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { loginUrl } from 'lib/constants';
import { ThemedBtn } from 'components/ThemedBtn';
import { colors } from 'styles/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center'
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 30,
	},
});

export default function RegisterPage(): React.JSX.Element {
	const { container, title } = styles;

	const handleSubmit = () => {
		console.log('register form submitted');
	};

	return (
		<ThemedView style={container}>
			<Spacer />
			<ThemedText isTitle style={title}>
				Register for an Account
			</ThemedText>
			<ThemedBtn onPress={handleSubmit}>
				<Text style={{ color: colors.primaryForeground }}>Register</Text>
			</ThemedBtn>
			<Spacer height={100} />
			<Link href={loginUrl}>
				<ThemedText style={{ textAlign: 'center' }}>
					Login Instead
				</ThemedText>
			</Link>
		</ThemedView>
	);
}
