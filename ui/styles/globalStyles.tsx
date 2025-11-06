import { StyleSheet } from 'react-native';
import { colors } from 'ui/styles/colors';

const { primary } = colors

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	boldTitle: {
		fontWeight: '700',
		fontSize: 18,
	},
	link: {
		marginVertical: 10,
		borderBottomWidth: 1,
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 30,
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
	},
	btn: {
		backgroundColor: primary,
		padding: 15,
		borderRadius: 5,
	},
	btnPressed: {
		opacity: 0.8,
	},
    card: {
		borderRadius: 5,
		padding: 20,
	},
});
