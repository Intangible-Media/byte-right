import { Text, View, Image } from "react-native";

export default function ItemIngredient(props) {
  return (
    <View
      style={{
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          width: "100%",
          minHeight: 75,
          marginVertical: 1,
          backgroundColor: "#ffffff",
          paddingHorizontal: 0,
          paddingVertical: 0,
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            overflow: "hidden",
            marginRight: 30,
          }}
        >
          <Image
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require(`../../assets/fake-food.jpg`)}
          />
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
            Chicken
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Nunito-Light",
              textAlign: "center",
              color: "#494B51",
            }}
          >
            300g
          </Text>
        </View>
      </View>
    </View>
  );
}
