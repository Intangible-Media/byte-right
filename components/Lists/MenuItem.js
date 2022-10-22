import { Text, View, Image } from "react-native";

export default function MenuItem(props) {
  const { fooditem, foodItemNumber } = props;

  const imgUrl = require(`../../assets/fake-food.jpg`);

  return (
    <View
      style={{
        width: "100%",
        minHeight: 75,
        marginVertical: 10,
        backgroundColor: "#ffffff",
        paddingHorizontal: 0,
        paddingVertical: 0,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 10,
        elevation: 10,
        shadowColor: "#8A8A8A",
      }}
    >
      <View style={{ flex: 2 }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "OpenSans-Bold",
            textAlign: "center",
          }}
        >
          {foodItemNumber}
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "OpenSans-Bold",
            textAlign: "center",
            color: "#49CF0F",
          }}
        >
          90%
        </Text>
      </View>
      <View style={{ flex: 6, paddingVertical: 12 }}>
        <Text
          style={{
            flexWrap: "wrap",
            fontSize: 15,
            fontFamily: "OpenSans-Bold",
            color: "#494B51",
          }}
        >
          {fooditem.name}
        </Text>
        <Text style={{ flexWrap: "wrap" }}>
          visual exploration for a visual exploration for
        </Text>
      </View>
      <Image
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          flex: 3,
        }}
        source={imgUrl}
      />
    </View>
  );
}
