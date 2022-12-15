import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image, ImageBackground } from "react-native";

export default function ImageHeader(props) {
  return (
    <View style={{ paddingHorizontal: 0 }}>
      <ImageBackground
        source={require("../../assets/image/header-profile.png")}
        resizeMode="cover"
      >
        <LinearGradient
          style={{
            height: 200,
            overflow: "hidden",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: 0,
          }}
          // Button Linear Gradient
          colors={["rgba(15, 15, 15, 0.85)", "transparent"]}
          locations={[0, 0.5]}
        ></LinearGradient>
      </ImageBackground>
    </View>
  );
}
