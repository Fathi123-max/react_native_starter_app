import { MainStackParamList } from "@/src/navgation/MainStack";
import { ScreenNames } from "@/src/navgation/ScreenNames";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArticalType } from "../../types/ArticleType";
import { get } from "../../utils/helpers/apiService";
import styles from "./styles";

const TopNews = () => {
  const [news, setNews] = useState<ArticalType[]>([]);
  const navigation =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.Home>>();

  useEffect(() => {
    get(
      "everything?q=bitcoin&apiKey=8fd9c37c86884467a2f461cb0d0c2167",
      setNews
    );
  }, []);

  const navigateToArticle = (item: ArticalType) => {
    navigation.navigate(ScreenNames.Article, { article: item });
  };

  const TopNewsCard = ({
    item,
    navigateToArticle,
  }: {
    item: ArticalType;
    navigateToArticle: (item: ArticalType) => void;
  }) => (
    <TouchableOpacity
      style={styles.CardContent}
      onPress={() => navigateToArticle(item)}
    >
      <ImageBackground
        source={{ uri: item.urlToImage }}
        style={styles.listCardImage}
      />
      <Text style={styles.listCardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>TopNews</Text>
      <FlatList
        data={news}
        horizontal={false}
        renderItem={({ item }) => (
          <TopNewsCard item={item} navigateToArticle={navigateToArticle} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TopNews;
