import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonplacement: {
    borderRadius: 6,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e32013",
  },
  logodef: {
    width: 400,
    height: 150,
    marginVertical: 30,
  },
  // searchbar: {
  //   color: "yellow",
  //   fontSize: 30,
  //   marginBottom: 150,
  // },
});

export default function Home({ navigation }) {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.image}>
      <Image source={require("../assets/logo.png")} style={styles.logodef} />
      <Text
        style={{
          color: "yellow",
          fontSize: 30,
          marginBottom: 150,
        }}
      >
        SEARCH BAR
      </Text>
      <View>
        <TouchableOpacity
          style={styles.buttonplacement}
          onPress={() => navigation.navigate("Covid")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              textTransform: "uppercase",
            }}
          >
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
