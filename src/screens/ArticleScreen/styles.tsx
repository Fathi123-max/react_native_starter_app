import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#666",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: "#1a73e8",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    fontFamily: "Cairo-Bold",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 24,
    color: "#444",
    fontFamily: "Cairo-Regular",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 24,
    fontFamily: "Cairo-Regular",
  },
  metaContainer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 16,
    marginBottom: 24,
  },
  metaText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
    fontFamily: "Cairo-Regular",
  },
  date: {
    fontStyle: "italic",
    fontFamily: "Cairo-Regular",
  },
  sourceButton: {
    backgroundColor: "#1a73e8",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  sourceText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Cairo-Regular",
  },
});
