import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Link } from 'expo-router';
import { colors } from 'styles/colors';

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
	const colorScheme = useColorScheme();
	const theme = colors[colorScheme ?? 'light'];
	const { background } = theme;
	const { container, link, title } = styles;

	return (
		<View style={[container, { backgroundColor: background }]}>
			<Text style={title}>About Page</Text>

			<Link href='/' style={link}>
				Back Home
			</Link>
		</View>
	);
};

export default AboutPage;
