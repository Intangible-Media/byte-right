import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

export default function FoodItemList() {
  const [foodListData, setFoodListData] = useState([
    {
      name: "Beef",
      image: require("../assets/foodCardExample1.png"),
      opened: false,
      stars: 4,
      subFoods: [
        {
          name: "Beef - Ribeye",
          image: require("../assets/foodCardExample2.png"),
          stars: 2,
          subFoods: [],
        },
        {
          name: "Beef - Ground Beef",
          image: require("../assets/foodCardExample4.png"),
          stars: 3,
          subFoods: [],
        },
      ],
    },
    {
      name: "Chicken",
      image: require("../assets/foodCardExample2.png"),
      opened: false,
      stars: 4,
      subFoods: [
        {
          name: "Chicken - Legs",
          image: require("../assets/foodCardExample2.png"),
          stars: 3,
          subFoods: [],
        },
        {
          name: "Chicken - Beast",
          image: require("../assets/foodCardExample4.png"),
          stars: 3,
          subFoods: [],
        },
      ],
    },
    {
      name: "Turkey",
      image: require("../assets/foodCardExample3.png"),
      opened: false,
      stars: 3,
      subFoods: [
        {
          name: "Chicken",
          image: require("../assets/foodCardExample2.png"),
          stars: 3,
          subFoods: [],
        },
        {
          name: "Fish",
          image: require("../assets/foodCardExample4.png"),
          stars: 3,
          subFoods: [],
        },
      ],
    },
    {
      name: "Fish",
      image: require("../assets/foodCardExample4.png"),
      opened: false,
      stars: 4,
      subFoods: [
        {
          name: "Chicken",
          image: require("../assets/foodCardExample2.png"),
          stars: 3,
          subFoods: [],
        },
        {
          name: "Fish",
          image: require("../assets/foodCardExample4.png"),
          stars: 3,
          subFoods: [],
        },
      ],
    },
    {
      name: "Ham",
      image: require("../assets/foodCardExample5.png"),
      opened: false,
      stars: 3,
      subFoods: [
        {
          name: "Chicken",
          image: require("../assets/foodCardExample2.png"),
          stars: 3,
          subFoods: [],
        },
        {
          name: "Fish",
          image: require("../assets/foodCardExample4.png"),
          stars: 3,
          subFoods: [],
        },
      ],
    },
  ]);

  const updateFoodListItems = ({ foodItemIndex, food }) => {
    if (food.subFoods.length === 0) return;
    if (food.opened) {
      // get the id of all the foods on that group and its children

      return;
    }

    const foodListDataCopy = [...foodListData];

    // this updates the list to let the user know that the food they clicked
    // on
    const updatedFoodListData = foodListDataCopy.map((foodItem) => {
      if (foodItem.name === food.name) {
        return (foodItem.opened = !foodItem.opened);
      }

      return;
    });

    const foodListDataPartOne = foodListDataCopy.slice(0, foodItemIndex + 1);
    const foodListDataPartTwo = foodListDataCopy.slice(foodItemIndex + 1);

    const newFoodListData = [
      ...foodListDataPartOne,
      ...food.subFoods,
      ...foodListDataPartTwo,
    ];

    console.log(newFoodListData);

    return setFoodListData(newFoodListData);
  };

  return (
    <View style={{ paddingLeft: 20, marginBottom: 30 }}>
      <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>Meats</Text>
      <ScrollView style={styles.foodCardsContainer} horizontal={true}>
        {foodListData.map((food, index) => (
          <View key={index} style={styles.foodCardContainer}>
            <ImageBackground
              style={styles.foodCardImage}
              source={food.image}
              resizeMode="contain"
            >
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? "rgba(0,0,0,.2)"
                      : "rgba(0,0,0,0)",
                  },
                  {
                    height: "100%",
                    borderRadius: 10,
                    justifyContent: "flex-end",
                    padding: 15,
                    paddingBottom: 25,
                  },
                ]}
                // onPress={() => {
                //   updateFoodListItems({
                //     foodItemIndex: index,
                //     food,
                //   });
                // }}
              >
                <Text style={styles.foodCardText}>{food.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  {[...Array(food.stars)].map((star, starIndex) => (
                    <Ionicons
                      name="star"
                      key={`${food.name}-stars-${starIndex}`}
                      size={20}
                      color="#FDBF00"
                      style={{ marginRight: 3 }}
                    />
                  ))}
                  {[...Array(5 - food.stars)].map((star, starIndex) => (
                    <Entypo
                      key={`${food.name}-stars-outlined-${starIndex}`}
                      name="star-outlined"
                      size={20}
                      color="#FDBF00"
                      style={{ marginRight: 3 }}
                    />
                  ))}
                </View>
              </Pressable>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  foodCardsContainer: {},
  foodCardContainer: {
    width: 148,
    height: 185,
    margin: 10,
    marginLeft: 0,
    borderRadius: 55,
  },
  foodCardImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  foodCardText: {
    color: "white",
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
    marginBottom: 8,
  },
});
