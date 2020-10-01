import React from "react";
import { StyleSheet, Button, Text, View, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default function About() {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.image}>
      <View>
        <Text>About Screen</Text>
      </View>
    </ImageBackground>
  );
}
