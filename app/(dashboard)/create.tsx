import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import type { BooksContextType } from 'types';
import { useRouter } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedBtn } from 'components/ThemedBtn';
import { ThemedView } from 'components/ThemedView';
import { ThemedText } from 'components/ThemedText';
import { ThemedTextInput } from 'components/ThemedTextInput';
import { useBooks } from 'hooks';
import { booksUrl } from 'lib/constants';
import { colors, globalStyles } from 'styles';

export default function CreatePage() {
	const { container, heading, input, multiline } = globalStyles;

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);

	const { createBook } = useBooks();
	const router = useRouter();

	const handleSubmit = async () => {
		if (!title.trim() || !author.trim || !description.trim()) return;

		try {
			setLoading(true);
			const bookData: Parameters<BooksContextType['createBook']>[0] = {
				title,
				author,
				description,
			};

			const res = await createBook(bookData);
			if (res) {
				router.replace(booksUrl);
			}
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
			setTitle('');
			setAuthor('');
			setDescription('');
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView style={container}>
				<ThemedText isTitle style={heading}>
					Add a New Book
				</ThemedText>
				<Spacer />

				<ThemedTextInput
					onChangeText={setTitle}
					placeholder='Book Title'
					style={input}
					value={title}
				/>
				<Spacer />

				<ThemedTextInput
					onChangeText={setAuthor}
					placeholder='Author'
					style={input}
					value={author}
				/>
				<Spacer />

				<ThemedTextInput
					onChangeText={setDescription}
					multiline
					placeholder='Book Description'
					style={multiline}
					value={description}
				/>
				<Spacer />

				<ThemedBtn onPress={handleSubmit} disabled={loading}>
					<Text style={{ color: colors.primaryForeground }}>
						{loading ? 'Saving...' : 'Create Book'}
					</Text>
				</ThemedBtn>
			</ThemedView>
		</TouchableWithoutFeedback>
	);
}
