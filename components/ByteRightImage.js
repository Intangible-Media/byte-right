import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
export default function ByteRightImage() {
    return (
        <View>
            <StatusBar style="dark" />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 36, fontFamily: "Nunito-Black" }}>
                    Your Bite
                </Text>
            </View>
            <View
                style={{
                    width: "100%",
                    borderRadius: 30,
                    overflow: "hidden",
                    height: Dimensions.get("window").width - 50,
                    padding: 20,
                }}
            >
                <ImageBackground
                    source={require("../assets/main.png")}
                    resizeMode="cover"
                    style={{
                        height: "100%",
                        borderRadius: 15,
                        overflow: "hidden",
                        flex: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingTop: 0,
                    }}
                >
                    <Image
                        source={require("../assets/logo.png")}
                        style={{ marginBottom: 50, marginTop: 30 }}
                    />
                    <Text
                        style={{
                            color: "white",
                            fontSize: 27,
                            fontFamily: "Nunito-Black",
                        }}
                    >
                        Choose The Right Bite.
                    </Text>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
    },
    bodyText: {
        fontSize: 20,
        textAlign: "center",
        color: "#49CF0F",
    },
    testcontainer: {
        flex: 2,
        justifyContent: "center",
    },
    testcamera: {
        flex: 2,
    },
    testbuttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    testbutton: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    testtext: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});