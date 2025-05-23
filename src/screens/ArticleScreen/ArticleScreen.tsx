import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenNames } from "@/src/navgation/ScreenNames";
import { MainStackParamList } from "@/src/navgation/Stacks/MainStack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
export default function ArticleScreen() {
  const navigation = useNavigation();
  const param = useRoute<RouteProp<MainStackParamList, ScreenNames.Article>>();
  const { article } = param.params || {};

  if (!article) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Article not found</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const { title, description, urlToImage, author, publishedAt, url, content } =
    article;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Article Image */}
        {urlToImage && (
          <Image
            source={{ uri: urlToImage }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        {/* Article Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          {/* Additional article content */}
          <Text style={styles.body}>
            {content || "No additional content available."}
          </Text>

          {/* Article Metadata */}
          <View style={styles.metaContainer}>
            {author && <Text style={styles.metaText}>By {author}</Text>}
            {publishedAt && (
              <Text style={[styles.metaText, styles.date]}>
                {new Date(publishedAt).toLocaleDateString()}
              </Text>
            )}
          </View>

          {/* Source Link */}
          {url && (
            <TouchableOpacity
              onPress={() => Linking.openURL(url)}
              style={styles.sourceButton}
            >
              <Text style={styles.sourceText}>Read Full Article</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
