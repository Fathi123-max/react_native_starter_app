import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  continer: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
    width: 400,
  },
  whiteContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 150,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  redContainer: {
    backgroundColor: "red",
    padding: 10,
    alignSelf: "flex-start",
    borderRadius: 10,
    marginBottom: 20,
  },
  redContainerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "black",
  },
  listContainer: {},
});

export default styles;
