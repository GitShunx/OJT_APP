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
        <Text>COVID SCREEN</Text>
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
            COVID-19
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Ayuda")}>
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
            AYUDA
          </Text>
        </TouchableOpacity>
      </View>

      {/* ROOT CONTAINER */}
      <View
        style={{
          flex: 3,
          padding: "2%",
          //backgroundColor: "yellow",
          width: "100%",
        }}
      >
        {/* COVID DATA CONTAINER */}
        <View
          style={{
            flex: 1,
            //backgroundColor: "#ddd",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* ACTIVE DISPLAY */}
            <TouchableOpacity
              onPress={() => alert("check")}
              style={{
                borderRadius: 10,
                backgroundColor: "#008DFF",
                width: "43%",
                height: 100,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontSize: 16,
                }}
              >
                ACTIVE
              </Text>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: "35%",
                  fontSize: 32,
                }}
              >
                242
              </Text>
            </TouchableOpacity>

            {/* RECOVERED DISPLAY */}
            <TouchableOpacity
              onPress={() => alert("check")}
              style={{
                borderRadius: 10,
                backgroundColor: "#018141",
                width: "43%",
                height: 100,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontSize: 16,
                }}
              >
                RECOVERED
              </Text>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: "35%",
                  fontSize: 32,
                }}
              >
                120
              </Text>
            </TouchableOpacity>
          </View>

          {/* PUM-PUI-DEATH CONTAINER DISPLAY */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "baseline",
              //backgroundColor: "pink",
            }}
          >
            {/* PUM DISPLAY */}
            <TouchableOpacity
              onPress={() => alert("check")}
              style={{
                borderRadius: 10,
                backgroundColor: "#AC4CB5",
                width: "25%",
                height: 100,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontSize: 16,
                }}
              >
                PUM
              </Text>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: "35%",
                  fontSize: 32,
                }}
              >
                14
              </Text>
            </TouchableOpacity>

            {/* PUI DISPLAY */}
            <TouchableOpacity
              onPress={() => alert("check")}
              style={{
                borderRadius: 10,
                backgroundColor: "#D29544",
                width: "25%",
                height: 100,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontSize: 16,
                }}
              >
                PUI
              </Text>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: "35%",
                  fontSize: 32,
                }}
              >
                09
              </Text>
            </TouchableOpacity>

            {/* DEATH  DISPLAY*/}
            <TouchableOpacity
              onPress={() => alert("check")}
              style={{
                borderRadius: 10,
                backgroundColor: "#B5271E",
                width: "25%",
                height: 100,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontSize: 16,
                }}
              >
                DEATH
              </Text>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: "35%",
                  fontSize: 32,
                }}
              >
                11
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

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
