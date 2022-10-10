import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import FoodItemList from "../components/FoodItemList";
import BottomNavigation from "../components/Navigations/BottomNavigation";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo } from "@expo/vector-icons";
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
          ></ImageBackground>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: -60,
            overflow: "hidden",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "85%",
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#1B202B",
                fontFamily: "OpenSans-Bold",
              }}
            >
              Chicken Ceasar Salad
            </Text>
            <Text>by Cheesecake Factory</Text>
            <View
              style={{ flexDirection: "row", marginTop: 6, marginBottom: 8 }}
            >
              <Ionicons
                name="star"
                key={`menu-list-star1`}
                size={15}
                color="#FDBF00"
                style={{ marginRight: 2 }}
              />
              <Ionicons
                name="star"
                key={`menu-list-star2`}
                size={15}
                color="#FDBF00"
                style={{ marginRight: 2 }}
              />
              <Ionicons
                name="star"
                key={`menu-list-star3`}
                size={15}
                color="#FDBF00"
                style={{ marginRight: 2 }}
              />
              <Ionicons
                name="star"
                key={`menu-list-sta4r`}
                size={15}
                color="#FDBF00"
                style={{ marginRight: 2 }}
              />
              <Ionicons
                name="star"
                key={`menu-list-star5`}
                size={15}
                color="#FDBF00"
                style={{ marginRight: 2 }}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
              <View style={{ width: "33.3%" }}>
                <Text>Choice</Text>
              </View>
              <View style={{ width: "33.3%" }}>
                <Text>Choice</Text>
              </View>
              <View style={{ width: "33.3%" }}>
                <Text>Choice</Text>
              </View>
            </View>
          </View>
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
