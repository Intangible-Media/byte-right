import { StatusBar } from "expo-status-bar";
import FoodItemList from "./components/FoodItemList";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  Platform,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar style="dark" />
      <View
        style={{
          width: "100%",
          borderRadius: 30,
          overflow: "hidden",
          height: Dimensions.get("window").width - 50,
          padding: 25,
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../byte-right/assets/logo.png")}
            style={{ marginBottom: 50 }}
          />
          <Text style={{ color: "white" }}>Hellow world</Text>
        </ImageBackground>
      </View>
      <FoodItemList />
      <FoodItemList />
      <FoodItemList />
    </ScrollView>
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
