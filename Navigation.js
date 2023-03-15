import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Toast from "react-native-toast-message";

import { getToken } from "./components/context/helper";
import StarRating from "./components/StarRating";
import FoodItemList from "./components/FoodItemList";
SplashScreen.preventAutoHideAsync();

function Navigation() {
    const [fontsLoaded] = useFonts({
        "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
        "Nunito-Light": require("./assets/fonts/Nunito-Light.ttf"),
        "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainContainer" component={MainContainer} />
                <Stack.Screen name="StarRating" component={StarRating} />
                <Stack.Screen name="FoodItemList" component={FoodItemList} />
                <Stack.Screen name="Home" component={Home} />
                {/* {!getToken() ? (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen
                            name="MainContainer"
                            component={MainContainer}
                        />

                        <Stack.Screen name="SignUp" component={SignUp} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen
                            name="MainContainer"
                            component={MainContainer}
                        />
                    </>
                )} */}
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    );
}

export default Navigation;
