import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "./screens/Camera";
import Home from "./screens/Home";
import MenuList from "./screens/Menu-List";
import Profile from "./screens/Profile";

import { Image, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    console.log("Already there !!");
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        backgroundColor: "white",
                        paddingVertical: 0,
                        color: "white",
                        height: 70,
                        shadowColor: "#7f5df0",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    },
                ],
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode="contain"
                            style={{ height: 20 }}
                            source={require("./assets/icons/home-icon.png")}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="New"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode="contain"
                            style={{ height: 20 }}
                            source={require("./assets/icons/plus-icon.png")}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Camera"
                component={Camera}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                padding: 15,
                                borderRadius: 35,
                                backgroundColor: "#49CF0F",
                            }}
                        >
                            <Image
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                                source={require("./assets/icons/CameraIcon.png")}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Saved"
                component={MenuList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode="contain"
                            style={{ height: 20 }}
                            source={require("./assets/icons/bookmark-icon.png")}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode="contain"
                            style={{ height: 20 }}
                            source={require("./assets/icons/person-icon.png")}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 30,
    },
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
    shadow: {
        shadowColor: "#7f5df0",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
