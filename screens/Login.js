import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "native-base";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    ActivityIndicator,
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
} from "react-native";
import Toast from "react-native-toast-message";
import { string, z } from "zod";
import { API } from "../data/constants";
import { useAuthContext } from "../components/context/AuthContext";
import { setToken } from "../components/context/helper";

const schema = z.object({
    Email: string().email(),
    Password: string().min(6, { message: "Too short" }),
});

const Login = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Email: "",
            Password: "",
        },
        resolver: zodResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);

    const { setUser } = useAuthContext();

    const onSubmit = async (schema) => {
        setIsLoading(true);
        try {
            console.log(schema.Email, schema.Password);
            const value = {
                identifier: schema.Email,
                password: schema.Password,
            };
            const response = await fetch(`${API}/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
            });
            console.log("Hello");
            const data = await response.json();

            if (data?.error) {
                Toast.show({
                    type: "error",
                    text1: "Email id or Password is incorrect !!",
                    text2: "Please Enter the correct credentials !",
                    position: "top",
                    autoHide: true,
                    fontSize: "large",
                });
                throw data?.error;
            } else {
                console.log("Welcome to container");
                setToken(data.jwt);
                setUser(data.user);

                navigation.navigate("MainContainer");
                Toast.show({
                    type: "success",
                    text1: "Welcome to Byte-Right !",
                });
            }
        } catch (error) {
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                width: "90%",
                paddingLeft: 40,
                paddingTop: 50,
                // marginTop: 300,
            }}
            behavior="height"
        >
            <ScrollView showsVerticalScrollIndicator={false}>
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
                <Text style={styles.label}> Email </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            placeholder="e.g. abc@gmail.com"
                        />
                    )}
                    name="Email"
                />
                <Text style={styles.error}>{errors.Email?.message}</Text>
                <Text style={styles.label}> Password </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 6,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Password"
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            placeholder="Enter Strong Password"
                            secureTextEntry={true}
                        />
                    )}
                    name="Password"
                />
                <Text style={styles.error}>{errors.Password?.message}</Text>
                <Button
                    colorScheme="success"
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}
                    type="Submit"
                >
                    <Text>
                        {" "}
                        Login <ActivityIndicator animating={isLoading} />{" "}
                    </Text>
                </Button>
                <Text> Didn't have account ?</Text>
                <Button
                    colorScheme="warning"
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                >
                    Sign up
                </Button>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#F7F7F7",
        borderColor: "gray",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    button: {
        paddingVertical: 15,
        margintop: 20,
        paddingbottom: 15,
    },
    error: {
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
        paddingHorizontal: 7,
        paddingVertical: 7,
    },
});

export default Login;
