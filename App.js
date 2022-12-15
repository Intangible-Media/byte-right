import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import FoodItemList from "./components/FoodItemList";
import BottomNavigation from "./components/Navigations/BottomNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Camera from "./screens/Camera";
import MenuList from "./screens/Menu-List";
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
    "Nunito-Light": require("./assets/fonts/Nunito-Light.ttf"),
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
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              backgroundColor: "white",
              paddingVertical: 0,
              color: "white",
              height: 70,
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                resizeMode="contain"
                style={{ height: 20 }}
                source={require("./assets/icons/home-icon.png")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="New"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                resizeMode="contain"
                style={{ height: 20 }}
                source={require("./assets/icons/plus-icon.png")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  padding: 15,
                  borderRadius: 35,
                  backgroundColor: "#49CF0F",
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require("./assets/icons/CameraIcon.png")}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Saved"
          component={MenuList}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                resizeMode="contain"
                style={{ height: 20 }}
                source={require("./assets/icons/bookmark-icon.png")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                resizeMode="contain"
                style={{ height: 20 }}
                source={require("./assets/icons/person-icon.png")}
              />
            ),
          }}
        />
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
    backgroundColor: "#ffffff",
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
