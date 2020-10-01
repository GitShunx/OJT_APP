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
  city_logo: {
    flex: 2,
  },
  data_button: {
    borderRadius: 15,
  },

  check: {
    flex: 1,
    backgroundColor: "#008DFF",
    margin: 1,
    borderRadius: 15,
    padding: 10,
  },
});

export default function Covid({ navigation }) {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.image}>
      <View style={styles.city_logo}>
        <Image
          source={require("../assets/cdo_logo.png")}
          style={{ width: 150, height: 150, marginTop: 30 }}
        />
      </View>

      <View
        style={{
          flex: 0.5,
          backgroundColor: "tomato",
          justifyContent: "center",
        }}
      >
        <Text>AYUDA SCREEN</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          borderRadius: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Covid")}>
          <Text
            style={{
              color: "#1634F3",
              fontWeight: "bold",
              padding: 8,
              paddingRight: 65,
              paddingLeft: 65,
              borderRadius: 30,
              backgroundColor: "#fff",
              borderWidth: 2,
              borderColor: "#fff",
            }}
          >
            COVID-19
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Ayuda")}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              padding: 8,
              paddingRight: 65,
              paddingLeft: 65,
              borderRadius: 30,
              backgroundColor: "#1634F3",
              borderWidth: 2,
              borderColor: "#fff",
            }}
          >
            AYUDA
          </Text>
        </TouchableOpacity>
      </View>

      {/* ROOT CONTAINER */}
      <View
        style={{
          flex: 3.5,
          padding: "2%",
          backgroundColor: "yellow",
          width: "100%",
        }}
      >
        {/* COVID DATA CONTAINER */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#ddd",
          }}
        >
          {/* O YEAH */}
          <View
            style={{
              margin: 5,
              backgroundColor: "tomato",
              alignItems: "center",
            }}
          >
            <Text>2,170</Text>
          </View>
        </View>
      </View>

      {/* LOGO */}
      <View
        style={{
          flex: 0.7,
          //padding: 10,
          //backgroundColor: "pink",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 10 }}>IN PARTNERSHIP WITH</Text>
        <Image
          //source={require("../assets/cdo_logo.png")}
          source={require("../assets/dswd.png")}
          style={{ width: 140, height: 70 }}
        />
      </View>
    </ImageBackground>
  );
}
