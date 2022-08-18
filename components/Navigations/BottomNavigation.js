import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
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
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <View style={styles.NavigationContainer}>
      <View style={styles.Navigation}>
        <Pressable style={styles.NavigationItem}>
          <FontAwesome name="camera" size={24} color="#BBBEC5" />
        </Pressable>
        <Pressable style={styles.NavigationItem}>
          <FontAwesome name="camera" size={24} color="#BBBEC5" />
        </Pressable>
        <Pressable style={styles.NavigationItem}>
          <Ionicons
            style={styles.centerItem}
            name="camera-outline"
            size={24}
            color="white"
          />
        </Pressable>
        <Pressable style={styles.NavigationItem}>
          <FontAwesome name="camera" size={24} color="#BBBEC5" />
        </Pressable>
        <Pressable
          style={styles.NavigationItem}
          onPress={() => navigationRef.navigate("Home")}
        >
          <FontAwesome name="camera" size={24} color="#BBBEC5" />
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
    alignItems: "center",
  },
  NavigationItem: {
    paddingVertical: 10,
  },
  centerItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: "#49CF0F",
  },
});
