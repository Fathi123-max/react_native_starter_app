import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mock data for favorites
const favorites = [
  {
    id: "1",
    title: "Favorite Item 1",
    description: "This is a sample favorite item",
    image: "https://via.placeholder.com/60",
    isFavorite: true,
  },
  {
    id: "2",
    title: "Favorite Item 2",
    description: "Another sample favorite item",
    image: "https://via.placeholder.com/60",
    isFavorite: true,
  },
  {
    id: "3",
    title: "Favorite Item 3",
    description: "One more sample favorite item",
    image: "https://via.placeholder.com/60",
    isFavorite: true,
  },
];

export default function FavScreen() {
  const [favoriteItems, setFavoriteItems] = React.useState(favorites);

  const toggleFavorite = (id: string) => {
    setFavoriteItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const renderItem = ({ item }: { item: (typeof favorites)[0] }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => toggleFavorite(item.id)}
        style={styles.favoriteButton}
      >
        <Ionicons
          name={item.isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={item.isFavorite ? "#FF3B30" : "#8E8E93"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>My Favorites</Text>
        {favoriteItems.length > 0 ? (
          <FlatList
            data={favoriteItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-dislike-outline" size={60} color="#8E8E93" />
            <Text style={styles.emptyText}>No favorites yet</Text>
            <Text style={styles.emptySubtext}>Add items to see them here</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#000000",
  },
  itemDescription: {
    fontSize: 14,
    color: "#8E8E93",
  },
  favoriteButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#000000",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 8,
    textAlign: "center",
  },
});
