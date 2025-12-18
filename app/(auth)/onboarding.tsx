// app/(auth)/onboarding.tsx
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

const Onboarding = () => {
  const { login } = useAuth();

  const handleButtonPress = async () => {
    await login(); // This updates isLoggedIn to true
    // Root layout's useEffect will automatically redirect to /(app)/
  };

  return (
    <View>
      <Image
        source={require("../../assets/images/onboarding/onboard-call-bg.jpg")}
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to</Text>
          <Text style={[styles.headerText, { color: "#007bff" }]}>My App</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Connect with friends and family easily.
          </Text>
          <Text style={styles.contentText}>Enjoy seamless communication.</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#f5faffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    gap: 20,
    borderWidth: 0,
  },
  header: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: { flex: 1, backgroundColor: "transparent" },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#333" },
  contentText: { fontSize: 16, color: "#666", marginVertical: 5 },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: "#007bff",
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});