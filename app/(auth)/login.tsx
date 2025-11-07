import { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedBtn } from 'components/ThemedBtn';
import { ThemedText } from 'components/ThemedText';
import { ThemedTextInput } from 'components/ThemedTextInput';
import { ThemedView } from 'components/ThemedView';
import { registerUrl } from 'lib/constants';
import { colors, globalStyles } from 'styles';
import { useUser } from 'hooks';

export default function LoginPage(): React.JSX.Element {
	const { container, title } = globalStyles;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

    const { user } = useUser()

	const handleSubmit = () => {
        console.log('user is:', user);
		console.log('login form submitted', email, password);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView style={container}>
				<Spacer />
				<ThemedText isTitle style={title}>
					Login to Your Account
				</ThemedText>

				<ThemedTextInput
					keyboardType='email-address'
					onChangeText={setEmail}
					placeholder='Email'
					style={{ width: '80%', marginBottom: 20 }}
					value={email}
				/>

				<ThemedTextInput
					onChangeText={setPassword}
					placeholder='Password'
					secureTextEntry
					style={{ width: '80%', marginBottom: 20 }}
					value={password}
				/>

				<ThemedBtn onPress={handleSubmit}>
					<Text style={{ color: colors.primaryForeground }}>
						Login
					</Text>
				</ThemedBtn>

				<Spacer height={100} />
				<Link href={registerUrl}>
					<ThemedText style={{ textAlign: 'center' }}>
						Register
					</ThemedText>
				</Link>
			</ThemedView>
		</TouchableWithoutFeedback>
	);
}
