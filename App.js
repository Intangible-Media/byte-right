import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import FoodItemList from "./components/FoodItemList";
import BottomNavigation from "./components/Navigations/BottomNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <ScrollView style={styles.mainContainer}>
        <StatusBar style="dark" />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 36, fontFamily: "Nunito-Black" }}>
            Your Bite
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            borderRadius: 30,
            overflow: "hidden",
            height: Dimensions.get("window").width - 50,
            padding: 20,
          }}
        >
          <ImageBackground
            source={require("../byte-right/assets/main.png")}
            resizeMode="cover"
            style={{
              height: "100%",
              borderRadius: 15,
              overflow: "hidden",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 30,
            }}
          >
            <Image
              source={require("../byte-right/assets/logo.png")}
              style={{ marginBottom: 50 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontFamily: "Nunito-Black",
              }}
            >
              Let's understand you
            </Text>
          </ImageBackground>
        </View>
        <FoodItemList />
        <FoodItemList />
        <FoodItemList />
      </ScrollView>
      <BottomNavigation />
    </View>
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
});
