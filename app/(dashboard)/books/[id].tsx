import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import type { BookData } from 'types';
import { Spacer } from 'components/Spacer';
import { ThemedBtn } from 'components/ThemedBtn';
import { ThemedCard } from 'components/ThemedCard';
import { ThemedLoader } from 'components/ThemedLoader';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { booksUrl } from 'lib/constants';
import { useBooks } from 'hooks';
import { colors, globalStyles } from 'styles';

export default function BookDetailsPage() {
	const { card, container, title } = globalStyles;
	const { id } = useLocalSearchParams();

	const { deleteBookById, fetchBookById } = useBooks();

	const [book, setBook] = useState<BookData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const handleDelete = () => {
		if (id && typeof id === 'string') {
			deleteBookById(id);
			setBook(null);
			router.replace(booksUrl);
		}
	};

	useEffect(() => {
		const loadBook = async (id: string): Promise<void> => {
			const res = await fetchBookById(id);
			setBook(res);
			setIsLoading(false);
		};

		if (id && typeof id === 'string') {
			setIsLoading(true);
			loadBook(id);
		}
	}, [id]);

	return isLoading ? (
		<ThemedView style={container} safe>
			<ThemedLoader />
		</ThemedView>
	) : (
		<ThemedView safe style={container}>
			<ThemedCard style={card}>
				<ThemedText style={title}>{book?.title}</ThemedText>
				<ThemedText>Written By: {book?.author}</ThemedText>
				<Spacer />

				<ThemedText isTitle>Book Description:</ThemedText>
				<Spacer height={10} />

				<ThemedText>{book?.description}</ThemedText>
			</ThemedCard>

			<ThemedBtn
				onPress={handleDelete}
				style={{
					marginTop: 40,
					backgroundColor: colors.warning,
					width: 200,
					alignSelf: 'center',
				}}
			>
				<Text
					style={{
						color: colors.primaryForeground,
						textAlign: 'center',
					}}
				>
					Delete Book
				</Text>
			</ThemedBtn>
		</ThemedView>
	);
}
