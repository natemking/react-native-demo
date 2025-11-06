import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedBtn } from 'components/ThemedBtn';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { registerUrl } from 'lib/constants';
import { colors } from 'styles/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 30,
	},
});

export default function LoginPage(): React.JSX.Element {
	const { container, title } = styles;

    const handleSubmit = () => {
        console.log('login form submitted');
    }

	return (
		<ThemedView style={container}>
			<Spacer />
			<ThemedText isTitle style={title}>
				Login to Your Account
			</ThemedText>

			<ThemedBtn 
                onPress={handleSubmit}
            >
				<Text style={{ color: colors.primaryForeground }}>
                    Login
                </Text>
			</ThemedBtn>

			<Spacer height={100} />
			<Link href={registerUrl}>
				<ThemedText style={{ textAlign: 'center' }}>
					Register
				</ThemedText>
			</Link>
		</ThemedView>
	);
}
