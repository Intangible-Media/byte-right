import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function FoodItemList() {
  const allFoods = [1, 1, 1, 1, 1];

  return (
    <View>
      <ScrollView style={styles.foodCardsContainer} horizontal={true}>
        {allFoods.map((food, index) => (
          <View key={index} style={styles.foodCardContainer}>
            <ImageBackground
              style={styles.foodCardImage}
              source={require("../assets/foodCardExample.png")}
              resizeMode="cover"
            >
              <Text style={styles.foodCardText}>Chicken Alfredo</Text>
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
    maxWidth: 148,
    height: 185,
    margin: 10,
    borderRadius: 55,
  },
  foodCardImage: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-end",
  },
  foodCardText: {
    color: "white",
    fontSize: 15,
  },
});
