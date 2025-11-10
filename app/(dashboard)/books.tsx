import { FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Spacer } from 'components/Spacer';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { useBooks } from 'hooks';
import { globalStyles } from 'styles';
import { ThemedCard } from 'components/ThemedCard';
import { booksUrl } from 'lib/constants';

export default function BooksPage() {
	const { card, cardTitle, container, heading, list } = globalStyles;

	const { books } = useBooks();

    const router = useRouter()

	return (
		<ThemedView style={[container, { alignItems: 'stretch' }]} safe>
			<Spacer />
			<ThemedText isTitle style={heading}>
				Your Reading List
			</ThemedText>
			<Spacer />

			{books.length <= 0 ? (
				<ThemedText style={{ textAlign: 'center'}}>Go Add Some Books</ThemedText>
			) : (
				<FlatList
					contentContainerStyle={list}
					data={books}
					keyExtractor={({ $id }) => $id}
					renderItem={({ item: { title, author, $id } }) => (
						<Pressable onPress={() => router.push(`${booksUrl}/${$id}`)}>
							<ThemedCard style={card}>
								<ThemedText style={cardTitle}>
									{title}
								</ThemedText>
								<ThemedText>Written by: {author}</ThemedText>
							</ThemedCard>
						</Pressable>
					)}
				/>
			)}
		</ThemedView>
	);
}
