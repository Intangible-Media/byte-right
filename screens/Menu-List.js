import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import FoodItemList from "../components/FoodItemList";
import BottomNavigation from "../components/Navigations/BottomNavigation";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <ScrollView style={[styles.mainContainer, { paddingTop: 0 }]}>
        <StatusBar style="light" />
        <View style={{ paddingHorizontal: 0 }}>
          <ImageBackground
            source={require("../assets/foodexample.jpg")}
            resizeMode="cover"
            style={{
              height: 300,
              overflow: "hidden",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 0,
            }}
          >
            {/* <Text
              style={{
                fontSize: 36,
                fontFamily: "Nunito-Black",
                paddingVertical: 70,
              }}
            >
              Your Saved Bites
            </Text> */}
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 0,
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
