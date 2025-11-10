import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import type { BookData } from 'types';
import { Spacer } from 'components/Spacer';
import { ThemedCard } from 'components/ThemedCard';
import { ThemedLoader } from 'components/ThemedLoader';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { useBooks } from 'hooks';
import { globalStyles } from 'styles';

export default function BookDetailsPage() {
	const { card, container, title } = globalStyles;
	const { id } = useLocalSearchParams();

	const { fetchBookById } = useBooks();

	const [book, setBook] = useState<BookData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadBook = async (id: string): Promise<void> => {
			const res = await fetchBookById(id);
			setBook(res);
            setIsLoading(false)
		};

		if (id && typeof id === 'string') {
            setIsLoading(true)
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
		</ThemedView>
	);
}
