import { useState, useEffect, useRef } from "react";
import { Animated, TextInput, Pressable, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import ImageHeader from "../components/Headers/ImageHeader-alt";
import MenuItem from "../components/Lists/MenuItem";
import ItemIngredient from "../components/Lists/ItemIngredient";
import FoodItemList from "../components/FoodItemList";
import ItemOverview from "../components/MenuDetails/ItemOverview";
import { Ionicons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function Profile({ navigation }) {
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
  ]);

  const [activeTab, setActiveTab] = useState("menu");

  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);

  return (
    <View>
      <ScrollView style={[styles.mainContainer, { paddingTop: 0 }]}>
        <StatusBar style="dark" />
        <ImageHeader />
        <View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: -50,
              marginBottom: 30,
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
              }}
              source={require("../assets/image/people/profile-ex.png")}
            />
            <Text
              style={{
                fontFamily: "Nunito-Black",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Hello world men
            </Text>
            <Text
              style={{
                fontFamily: "Nunito-Light",
                fontSize: 10,
                textAlign: "center",
              }}
            >
              Hello world
            </Text>
          </View>
          <View
            style={{
              width: "90%",
            }}
          >
            <TextInput
              style={{
                backgroundColor: "#F7F7F7",
                marginBottom: 12,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={{
                backgroundColor: "#F7F7F7",
                marginBottom: 12,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={{
                backgroundColor: "#F7F7F7",
                marginBottom: 12,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
              backgroundColor: "#49CF0F",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 0.25,
                color: "white",
              }}
            >
              Save Profile
            </Text>
          </Pressable>
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
              backgroundColor: "black",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 0.25,
                color: "white",
              }}
            >
              Save Profile
            </Text>
          </Pressable>
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
    fontSize: 17,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
  },
});
