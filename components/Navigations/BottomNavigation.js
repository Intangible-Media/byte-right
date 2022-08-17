import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";

export default function BottomNavigation() {
  return (
    <View style={styles.NavigationContainer}>
      <View style={styles.Navigation}>
        <Pressable style={styles.NavigationItem}>
          <Text>Home</Text>
        </Pressable>
        <Pressable style={styles.NavigationItem}>
          <Text>Home</Text>
        </Pressable>
        <Pressable style={styles.NavigationItem}>
          <Text>Home</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavigationContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    elevation: 20,
    shadowColor: "red",
  },
  Navigation: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-evenly",
  },
  NavigationItem: {
    paddingVertical: 20,
  },
});
