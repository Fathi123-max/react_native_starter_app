import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MainStackParamList } from "@/src/navgation/MainStack";
import { ScreenNames } from "@/src/navgation/ScreenNames";
import { ArticalType } from "@/src/types/ArticleType";
import { get } from "@/src/utils/helpers/apiService";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import styles from "./styles";
export default function MainNews() {
  const navigation =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.Home>>();

  useEffect(() => {
    get("everything?q=bitcoin", setNews);
  }, []);

  const [news, setNews] = useState<any>([]);

  function RenderNewsCard({ item }: { item: ArticalType }) {
    const navigateToArticle = (item: ArticalType) => {
      navigation.navigate(ScreenNames.Article, { article: item });
    };

    return (
      <TouchableOpacity onPress={() => navigateToArticle(item)}>
        <ImageBackground
          source={{
            uri: item.urlToImage,
          }}
          style={styles.continer}
        >
          <View style={styles.whiteContainer}>
            <View style={styles.redContainer}>
              <Text style={styles.redContainerText}>{item.title}</Text>
            </View>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={news}
        renderItem={({ item }) => RenderNewsCard({ item })}
        horizontal={true}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      ></FlatList>
    </View>
  );
}
