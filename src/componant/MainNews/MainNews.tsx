import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";

import styles from "./styles";
export default function MainNews() {
  const items = [
    {
      id: 1,
      title: "First Meeting",
      description:
        "Today we will discuss the new project. We will talk about the team and the roles each person will play.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "New Project",
      description:
        "We will be working on a new project. The details will be discussed at the meeting.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Lunch Break",
      description:
        "We will have a lunch break at 12:00 pm. Please bring your lunch.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  function RenderNewsCard({ item }: { item: (typeof items)[0] }) {
    return (
      <ImageBackground
        source={{
          uri: item.image,
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
    );
  }

  return (
    <FlatList
      data={items}
      renderItem={(items) => RenderNewsCard(items)}
      horizontal={true}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
    ></FlatList>
  );
}
