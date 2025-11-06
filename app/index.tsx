import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedLogo } from 'components/ThemedLogo';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { loginUrl, registerUrl } from 'lib/constants';
import { globalStyles } from 'styles';

export default function HomePage(): React.JSX.Element {
	const { boldTitle, container, link } = globalStyles;

	return (
		<ThemedView style={container}>
			<ThemedLogo />
			<Spacer height={20} />

			<ThemedText style={boldTitle} isTitle>
				The Number 1
			</ThemedText>

			<Spacer height={10} />
			<ThemedText>Reading List App</ThemedText>
			<Spacer />

			<Link href={loginUrl} style={link}>
				<ThemedText>Login Page</ThemedText>
			</Link>
			<Link href={registerUrl} style={link}>
				<ThemedText>Register Page</ThemedText>
			</Link>
		</ThemedView>
	);
}
