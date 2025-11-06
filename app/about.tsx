import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';

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

const AboutPage = (): React.JSX.Element => {
	const { container, link, title } = styles;

	return (
		<ThemedView style={container}>
			<ThemedText style={title} isTitle>About Page</ThemedText>

			<Link href='/' style={link}>
				<ThemedText>Back Home</ThemedText>
			</Link>
		</ThemedView>
	);
};

export default AboutPage;
