import { useEffect, useRef } from "react";
import { Animated, View, Image, Text } from "react-native";

export default function ItemOverview(props) {
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View style={{ marginTop: 20, opacity: fadeAnim2 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: 65, width: 65, marginRight: 10 }}
          source={require("../../assets/image/examples/chicken-salad-1.png")}
        />
        <Image
          resizeMode="contain"
          style={{ height: 65, width: 65, marginRight: 10 }}
          source={require("../../assets/image/examples/chicken-salad-2.png")}
        />
        <Image
          resizeMode="contain"
          style={{ height: 65, width: 65, marginRight: 10 }}
          source={require("../../assets/image/examples/chicken-salad-3.png")}
        />
        <Image
          resizeMode="contain"
          style={{ height: 65, width: 65, marginRight: 10 }}
          source={require("../../assets/image/examples/chicken-salad-1.png")}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#1B202B",
            fontFamily: "OpenSans-Bold",
            fontSize: 16,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            color: "#1B202B",
            fontFamily: "Nunito-Light",
            fontSize: 16,
          }}
        >
          Good recipe for your health. I made it myself. It’s good for dinner.
          Good recipe for your health and suitable.
        </Text>
      </View>
    </Animated.View>
  );
}
