import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

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
        borderBottomWidth: 1
    }
});

const AboutPage = () => {
    const { container, link, title } = styles;

	return (
		<View style={container}>
			<Text style={title}>About Page</Text>

            <Link href='/' style={link}>Back Home</Link>
		</View>
	);
};

export default AboutPage;


