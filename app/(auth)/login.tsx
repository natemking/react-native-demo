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
	const { container, error: errStyles, title } = globalStyles;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const { login, user } = useUser();

	const handleSubmit = async () => {
		setError(null);

		try {
			await login(email, password);
		} catch (err) {
			if (err instanceof Error) {
                setError(err.message);
			}
		}
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

				{error ? (
					<>
						<Spacer />
						<Text style={errStyles}>{error}</Text>
					</>
				) : null}

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
