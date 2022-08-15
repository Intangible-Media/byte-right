import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FoodItemList() {
  const allFoods = [
    require("../assets/foodCardExample1.png"),
    require("../assets/foodCardExample2.png"),
    require("../assets/foodCardExample3.png"),
    require("../assets/foodCardExample4.png"),
    require("../assets/foodCardExample5.png"),
  ];

  return (
    <View style={{ paddingLeft: 25 }}>
      <Text>Hello world</Text>
      <ScrollView style={styles.foodCardsContainer} horizontal={true}>
        {allFoods.map((food, index) => (
          <TouchableHighlight key={index} style={styles.foodCardContainer}>
            <ImageBackground
              style={styles.foodCardImage}
              source={food}
              resizeMode="contain"
            >
              <Text style={styles.foodCardText}>Chicken Alfredo</Text>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="star" size={13} color="yellow" />
                <Ionicons name="star" size={13} color="yellow" />
                <Ionicons name="star" size={13} color="yellow" />
                <Ionicons name="star" size={13} color="yellow" />
                <Ionicons name="star" size={13} color="yellow" />
              </View>
            </ImageBackground>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  foodCardsContainer: {},
  foodCardContainer: {
    maxWidth: 148,
    height: 185,
    margin: 10,
    marginLeft: 0,
    borderRadius: 55,
  },
  foodCardImage: {
    flex: 1,
    padding: 15,
    paddingBottom: 25,
    justifyContent: "flex-end",
  },
  foodCardText: {
    color: "white",
    fontSize: 15,
  },
});
