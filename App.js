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
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text>HEYYYYYY</Text>
      </View>
      <Text style={styles.bodyText}>This is the new te </Text>
      <FoodItemList />
      <FoodItemList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
  bodyText: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
});
