import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {

  return (
    <View
      style={styles.container}
    >

      <Image
        style={styles.img}
        source={require('@/assets/images/react-logo.png')}

      />

      <Text style={styles.title} > Home</Text>


      <Image
        style={styles.img}
        source={require('@/assets/images/react-logo.png')}

      />

    </View>

  );


}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    padding: 10,

  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 100,
  }
  , title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  }
});

export default Header;
