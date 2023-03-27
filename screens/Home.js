import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ByteRightImage from "../components/ByteRightImage";
import FoodItemList from "../components/FoodItemList";

export default function Home({ navigation }) {
    const [isCategory, setIsCategory] = useState(true);
    return (
        <View>
            <ScrollView style={[styles.mainContainer, { paddingTop: 10 }]}>
                <ByteRightImage />
                {isCategory === true ? (
                    <FoodItemList props={true} />
                ) : (
                    <FoodItemList props={false} />
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#ffffff",
        marginTop: 30,
    },
});
