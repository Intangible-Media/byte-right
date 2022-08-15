import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text>HEYYYYYY</Text>
      </View>
      <Text style={styles.bodyText}>
        Open up App.js to start working on your app! something else new here
      </Text>
      <TouchableHighlight
        onPress={() => {
          console.log("Hello wrold");
        }}
      >
        <Text>Hello world there</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
  bodyText: {
    fontSize: 40,
    color: "red",
  },
});
