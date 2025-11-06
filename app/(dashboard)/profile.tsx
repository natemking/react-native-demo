import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { Spacer } from 'components/Spacer';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
	},
});

export default function ProfilePage() {
	const { container, heading } = styles;
	return (
		<ThemedView style={container}>
			<ThemedText isTitle style={heading}>
				Your Email
			</ThemedText>
			<Spacer />

			<ThemedText>Time to start reading some books...</ThemedText>
			<Spacer />
		</ThemedView>
	);
}
