import Header from "@/src/componant/Header/Header";
import MainNews from "@/src/componant/MainNews/MainNews";
import TopNews from "@/src/componant/TopNews/TopNews";
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

const HomeScreen = () => {
  const [news, setNews] = useState("News");

  const changeNews = () => {
    setNews((prevNews) => prevNews + "hello");
  };

  const [counter, setCounter] = useState(0);

  const changeCounter = () => {
    setCounter((prevCounter) => {
      prevCounter++;
      return prevCounter;
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <MainNews />
        <TopNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
