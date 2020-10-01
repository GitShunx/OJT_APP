import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Covid from "./screens/covid";
import Ayuda from "./screens/ayuda";
import About from "./screens/about";

const Stack = createStackNavigator();

export default function ScreenHandler() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "coral",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "HOME",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Covid"
          component={Covid}
          options={{
            title: "COVID",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Ayuda"
          component={Ayuda}
          options={{
            title: "AYUDA",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
