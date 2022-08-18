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

export default function Profile() {
  return (
    <View>
      <ScrollView style={[styles.mainContainer, { paddingTop: 20 }]}>
        <StatusBar style="dark" />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 36, fontFamily: "Nunito-Black" }}>
            Profile
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
            source={require("../assets/main.png")}
            resizeMode="cover"
            style={{
              height: "100%",
              borderRadius: 15,
              overflow: "hidden",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 0,
            }}
          >
            <Image
              source={require("../assets/logo.png")}
              style={{ marginBottom: 50, marginTop: 30 }}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#49CF0F",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
});
