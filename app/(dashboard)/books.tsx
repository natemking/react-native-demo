import { FlatList, Pressable } from 'react-native';
import { Spacer } from 'components/Spacer';
import { ThemedText } from 'components/ThemedText';
import { ThemedView } from 'components/ThemedView';
import { useBooks } from 'hooks';
import { globalStyles } from 'styles';
import { ThemedCard } from 'components/ThemedCard';

export default function BooksPage() {
	const { card, cardTitle, container, heading, list } = globalStyles;

	const { books } = useBooks();

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
					renderItem={({ item: { title, author } }) => (
						<Pressable>
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
