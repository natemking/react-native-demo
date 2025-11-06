import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { registerUrl } from 'lib/constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    }
});

export default function LoginPage(): React.JSX.Element {
	const { container, title } = styles;
	return (
		<ThemedView style={container}>
			<Spacer />
			<ThemedText isTitle style={title}>
				Login to Your Account
			</ThemedText>
			<Spacer height={100} />
			<Link href={registerUrl}>
				<ThemedText style={{ textAlign: 'center' }}>
					Register
				</ThemedText>
			</Link>
		</ThemedView>
	);
};
