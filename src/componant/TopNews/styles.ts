import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,

    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  listContainer: {},

  CardContent: {
    borderColor: "red",
    borderWidth: 1,

    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  listCardImage: {
    width: 200,
    borderRadius: 10,
    height: 100,
  },
  listCardTitle: {
    textAlign: "left",
    marginTop: 10,
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default styles;
