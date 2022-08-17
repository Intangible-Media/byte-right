import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function FoodItemList() {
  const allFoods = [
    require("../assets/foodCardExample1.png"),
    require("../assets/foodCardExample2.png"),
    require("../assets/foodCardExample3.png"),
    require("../assets/foodCardExample4.png"),
    require("../assets/foodCardExample5.png"),
  ];

  return (
    <View style={{ paddingLeft: 20, marginBottom: 30 }}>
      <Text style={{ fontSize: 18 }}>Hello world</Text>
      <ScrollView style={styles.foodCardsContainer} horizontal={true}>
        {allFoods.map((food, index) => (
          <View key={index} style={styles.foodCardContainer}>
            <ImageBackground
              style={styles.foodCardImage}
              source={food}
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
              >
                <Text style={styles.foodCardText}>Chicken Alfredo</Text>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name="star" size={13} color="#FDBF00" />
                  <Ionicons name="star" size={13} color="#FDBF00" />
                  <Ionicons name="star" size={13} color="#FDBF00" />
                  <Ionicons name="star" size={13} color="#FDBF00" />
                  <Ionicons name="star" size={13} color="#FDBF00" />
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
    // padding: 15,
    // paddingBottom: 25,
    justifyContent: "flex-end",
  },
  foodCardText: {
    color: "white",
    fontSize: 15,
  },
});
