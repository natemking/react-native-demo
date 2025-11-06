import { StyleSheet, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedLogo } from 'components/ThemedLogo';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { aboutUrl, contactUrl } from 'lib/constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontWeight: '700',
		fontSize: 18,
	},
	link: {
		marginVertical: 10,
		borderBottomWidth: 1,
	},
});

const HomePage = (): React.JSX.Element => {
	const { container, link, title } = styles;
	return (
		<ThemedView style={container}>
			<ThemedLogo />
			<Spacer height={20} />

			<ThemedText style={title} isTitle>
				The Number 1
			</ThemedText>

			<Spacer height={10} />
			<ThemedText>Reading List App</ThemedText>
			<Spacer />

			<Link href={aboutUrl} style={link}>
				<ThemedText>About Page</ThemedText>
			</Link>
			<Link href={contactUrl} style={link}>
				<ThemedText>Contact Page</ThemedText>
			</Link>
		</ThemedView>
	);
};

export default HomePage;
