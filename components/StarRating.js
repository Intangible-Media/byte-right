import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableWithoutFeedback,
    Animated,
    Modal,
    Alert,
    Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { API } from "../data/constants";

export default function StarRating({ props }) {
    const starRatingOptions = [1, 2, 3, 4, 5];
    const [modalVisible, setModalVisible] = useState(true);

    const [starRating, setStarRating] = useState(null);
    console.log(starRating);
    const animatedButtonScale = new Animated.Value(1);

    function setRating() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY3ODczNDIzNSwiZXhwIjoxNjgxMzI2MjM1fQ.eVCsn56b_koWqYdXKMthpcSXJNMrLEFh7-fQmk-DmOs"
        );
        // myHeaders.append("Authorization", "Bearer" + getToken());

        const raw = JSON.stringify({
            data: {
                Rating: starRating,
            },
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(API + "/sub-catogaries/" + props["id"], requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        setModalVisible(!modalVisible);
    }

    const handlePressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const animatedScaleStyle = {
        transform: [{ scale: animatedButtonScale }],
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}

            //style={{ height: "50%", width: "50%" }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        {props["name"]} {"\n"}
                    </Text>
                    <Text style={styles.heading}>
                        {starRating ? `${starRating}/5` : "Tap to rate"}
                    </Text>
                    <View style={styles.stars}>
                        {starRatingOptions.map((option) => (
                            <TouchableWithoutFeedback
                                onPressIn={() => handlePressIn(option)}
                                onPressOut={() => handlePressOut(option)}
                                onPress={() => setStarRating(option)}
                                key={option}
                            >
                                <Animated.View style={animatedScaleStyle}>
                                    <MaterialIcons
                                        name={
                                            starRating >= option
                                                ? "star"
                                                : "star-border"
                                        }
                                        size={32}
                                        style={
                                            starRating >= option
                                                ? styles.starSelected
                                                : styles.starUnselected
                                        }
                                    />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        ))}
                    </View>
                    <Button
                        style={styles.Button}
                        title="Submit"
                        onPress={() => setRating()}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    Button: {
        color: "red",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    starUnselected: {
        color: "#aaa",
    },
    starSelected: {
        color: "#ffb300",
    },
});
