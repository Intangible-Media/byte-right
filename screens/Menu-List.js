import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import ImageHeader from "../components/Headers/ImageHeader";
import MenuList from "../components/Lists/MenuItem";
import ItemIngredient from "../components/Lists/ItemIngredient";
import FoodItemList from "../components/FoodItemList";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function Home({ navigation }) {
  const [foodItems, setFoodItems] = useState([
    {
      name: "Chicken Parm",
      description: "",
      rating: "",
      image: "fake-food.jpg",
    },
    {
      name: "Steak & Eggs",
      description: "",
      rating: "",
      image: "fake-food.jpg",
    },
    {
      name: "Ham & Cheese",
      description: "",
      rating: "",
      image: "fake-food.jpg",
    },
    { name: "Becon Guda", description: "", rating: "", image: "fake-food.jpg" },
    {
      name: "Bacon Burger",
      description: "",
      rating: "",
      image: "fake-food.jpg",
    },
    {
      name: "Ceasar Salad",
      description: "",
      rating: "",
      image: "fake-food.jpg",
    },
  ]);

  const [activeTab, setActiveTab] = useState("menu");

  return (
    <View>
      <ScrollView style={[styles.mainContainer, { paddingTop: 0 }]}>
        <StatusBar style="light" />
        <ImageHeader />
        <View
          style={{
            alignItems: "center",
            marginTop: -60,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: 10,
              overflow: "hidden",
              paddingHorizontal: 20,
              paddingVertical: 12,
              elevation: 10,
              shadowColor: "#8A8A8A",
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
              style={{ flexDirection: "row", marginTop: 6, marginBottom: 20 }}
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
              <View style={{ width: "33.3%", flexDirection: "row" }}>
                <Image
                  resizeMode="contain"
                  style={{ height: 20, marginRight: 10 }}
                  source={require("../assets/icons/byteright-sm.png")}
                />
                <View>
                  <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold" }}>
                    1st
                  </Text>
                  <Text style={{ fontSize: 14, fontFamily: "Nunito-Light" }}>
                    Choice
                  </Text>
                </View>
              </View>
              <View style={{ width: "33.3%", flexDirection: "row" }}>
                <Image
                  resizeMode="contain"
                  style={{ height: 20, marginRight: 10 }}
                  source={require("../assets/icons/byte-rating.png")}
                />
                <View>
                  <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold" }}>
                    1st
                  </Text>
                  <Text style={{ fontSize: 14, fontFamily: "Nunito-Light" }}>
                    Choice
                  </Text>
                </View>
              </View>
              <View style={{ width: "33.3%", flexDirection: "row" }}>
                <Image
                  resizeMode="contain"
                  style={{ height: 20, marginRight: 10 }}
                  source={require("../assets/icons/byte-tries.png")}
                />
                <View>
                  <Text style={{ fontSize: 16, fontFamily: "OpenSans-Bold" }}>
                    1st
                  </Text>
                  <Text style={{ fontSize: 14, fontFamily: "Nunito-Light" }}>
                    Choice
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              justifyContent: "space-around",
              marginBottom: 20,
            }}
          >
            <Text style={[styles.link, { color: "#49CF0F" }]}>Menu</Text>
            <Text style={styles.link}>Overview</Text>
            <Text style={styles.link}>Review</Text>
          </View>
          {/* This is the menu items */}
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              justifyContent: "space-around",
            }}
          >
            {foodItems.map((foodItem, index) => (
              <MenuList
                key={foodItem.name}
                fooditem={foodItem}
                foodItemNumber={index + 1}
              />
            ))}
          </View>

          {/* This is the overview */}
          <ItemIngredient />
          <ItemIngredient />
          <ItemIngredient />
          <ItemIngredient />
          <ItemIngredient />
          <FoodItemList />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 0,
    backgroundColor: "#ffffff",
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
  link: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    color: "#BBBEC5",
  },
});
