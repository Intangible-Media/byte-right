import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import FoodItemList from "./components/FoodItemList";
import BottomNavigation from "./components/Navigations/BottomNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";

const Stack = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              backgroundColor: "red",
              color: "white",
              shadowColor: "#7f5df0",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpaacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            },
          ],
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="New" component={Profile} />
        <Stack.Screen name="Camera" component={Home} />
        <Stack.Screen name="Saved" component={Profile} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#49CF0F",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
  bodyText: {
    fontSize: 20,
    textAlign: "center",
    color: "#49CF0F",
  },
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpaacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
