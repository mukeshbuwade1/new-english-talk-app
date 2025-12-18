import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RenderComp = () => {
  return (
    <>
      {/* App Logo or Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Connect & Converse!</Text>
        <Text style={styles.homeSubTitle}>
          Learn languages. Kill loneliness. Reduce stress.
        </Text>
      </View>

      {/* Connect Button */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          //    onPress={handleConnectButton}
          style={[
            styles.btnView,
            {
              backgroundColor: "#FF9800",
            },
          ]}
        >
          {/* <SvgCall width={16} height={16} /> */}
          <Text style={styles.buttonText}>Connect Now</Text>
        </TouchableOpacity>
      </View>

      {/* Icon Buttons for Profile, Feedback, and Report Bug */}
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={[
            styles.btnView,
            {
              backgroundColor: "#6AB6CF",
            },
          ]}
        >
          {/* <SvgThumbsUp width={16} height={16} /> */}
          <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnView,
            {
              backgroundColor: "#795948",
            },
          ]}
        >
          {/* <SvgFlag width={16} height={16} /> */}
          <Text style={styles.buttonText}>Report Bug</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RenderComp;

const styles = StyleSheet.create({
  btnView: {
    paddingHorizontal: 28,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 40,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 14,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
    height: "35%",
    justifyContent: "center",
    gap: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  homeSubTitle: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#fff",
    fontStyle: "italic",
  },
  connectButton: {
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 3, // Slight shadow for depth
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContent: {
    flexDirection: "row-reverse", // icon appears after text
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    height: "35%",
    alignItems: "flex-end",
  },
  iconButton: {
    alignItems: "center",
  },
});
