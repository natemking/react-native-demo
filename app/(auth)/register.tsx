import { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedBtn } from 'components/ThemedBtn';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { ThemedTextInput } from 'components/ThemedTextInput';
import { loginUrl } from 'lib/constants';
import { useUser } from 'hooks';
import { colors, globalStyles } from 'styles';

export default function RegisterPage(): React.JSX.Element {
	const { container, error: errStyles, title } = globalStyles;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const { register, user } = useUser();

	const handleSubmit = async () => {
		setError(null);

		try {
			await register(email, password);
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
					Register for an Account
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
						Register
					</Text>
				</ThemedBtn>

				{error ? (
					<>
						<Spacer />
						<Text style={errStyles}>{error}</Text>
					</>
				) : null}

				<Spacer height={100} />
				<Link href={loginUrl}>
					<ThemedText style={{ textAlign: 'center' }}>
						Login Instead
					</ThemedText>
				</Link>
			</ThemedView>
		</TouchableWithoutFeedback>
	);
}
