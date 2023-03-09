import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { setToken } from "../components/context/helper";
import { API } from "../data/constants";
import Toast from "react-native-toast-message";
const SignUp = () => {
    useEffect(() => {
        if (Password.length > 0) {
            checkPasswordlength(Password);
        }
    }, [Password]);

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigation = useNavigation();

    const checkEmail = async (Email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        try {
            if (reg.test(Email) === true) {
                setEmailError("");
            } else {
                setEmailError("Invalid email id");
            }
        } catch (error) {
            setEmailError("Please Enter the correct email id !");
        }
    };

    const checkPasswordlength = (Password) => {
        if (Password.length < 6) {
            setPasswordError("Password must be atleast 6 characters long");
        } else {
            setPasswordError("");
        }
    };

    const checkPassword = (confirmPassword) => {
        if (Password === confirmPassword) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Both Password are not  matching !!");
        }
    };

    //const { isDesktopView } = useScreenSize();
    //const navigate = useNavigate();

    //const { setUser } = useAuthContext();

    //const [isLoading, setIsLoading] = useState(false);

    // const [error, setError] = useState("");

    const onFinish = async () => {
        //setIsLoading(true);
        setPassword(Password);
        try {
            if (username.trim() === "") {
                setNameError("Name required.");
            } else {
                setNameError(null);
            }

            const values = {
                username: username,
                email: Email,
                password: Password,
            };
            const response = await fetch(`${API}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            console.log("Reached API");
            const data = await response.json();
            //console.log(data.error.message);
            if (data?.error) {
                Toast.show({
                    type: "error",
                    text1: data.error.message,
                    position: "top",
                    autoHide: true,
                    fontSize: "large",
                });
                console.log("Reached error", data.error.message);
                return null;
            } else {
                setToken(data.jwt);
                console.log("Reached login");
                navigation.navigate("Login");
            }
        } catch (error) {
            console.error(error);
            //setError(error?.message ?? "Something went wrong!");
        } finally {
            //setIsLoading(false);
        }
    };

    return (
        <View
            style={{
                width: "90%",
                paddingLeft: 40,
                paddingTop: 200,
            }}
        >
            <TextInput
                style={styles.textInput}
                onChangeText={(e) => setUsername(e)}
                value={username}
                placeholder="Name"
            />
            {!nameError && <Text style={{ color: "red" }}>{nameError}</Text>}

            <TextInput
                style={styles.textInput}
                onChangeText={(e) => {
                    setEmail(e);
                    checkEmail(e);
                }}
                value={Email}
                placeholder="Email"
            />
            {emailError && <Text style={styles.error}>{emailError}</Text>}
            <TextInput
                style={styles.textInput}
                onChangeText={(e) => {
                    setPassword(e);
                }}
                value={Password}
                placeholder="Password"
                secureTextEntry={true}
            />
            {passwordError && <Text style={styles.error}>{passwordError}</Text>}
            <TextInput
                style={styles.textInput}
                onChangeText={(e) => checkPassword(e)}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />

            {confirmPasswordError && (
                <Text style={styles.error}>{confirmPasswordError}</Text>
            )}

            <Button colorScheme="success" onPress={onFinish}>
                SignUp
            </Button>
            <Text> Already have account ?</Text>
            <Button
                colorScheme="warning"
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Login");
                }}
            >
                Login
            </Button>
            {/* <Button colorScheme="warning" style={styles.button} > Login </Button> */}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#F7F7F7",
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
    },
    message: {
        color: "red",
    },
    error: {
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default SignUp;
