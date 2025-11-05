import { StyleSheet, Text, View, Image } from 'react-native';

const HomePage = () => {
	const { container, img, title } = styles;
	return (
		<View style={container}>
            <Image source={require('img/logo_light.png')} style={img} />

			<Text style={title}>The Number 1</Text>
			<Text style={{ marginTop: 10, marginBottom: 30 }}>
				Reading List App
			</Text>
		</View>
	);
};

export default HomePage;

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
        marginVertical: 20
    },
});
