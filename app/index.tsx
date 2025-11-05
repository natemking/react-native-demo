import { StyleSheet, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from 'components/ThemedView';
import ThemedLogo from 'components/ThemedLogo';

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
	img: {
		marginVertical: 20,
	},
	link: {
		marginVertical: 10,
		borderBottomWidth: 1,
	},
});

const HomePage = () => {
	const { container, img, link, title } = styles;
	return (
		<ThemedView style={container}>
			<ThemedLogo />

			<Text style={title}>The Number 1</Text>
			<Text style={{ marginTop: 10, marginBottom: 30 }}>
				Reading List App
			</Text>

			<Link href='/about' style={link}>About Page</Link>
			<Link href='/contact' style={link}>Contact Page</Link>
		</ThemedView>
	);
};

export default HomePage;
