import { StyleSheet } from "react-native";

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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
