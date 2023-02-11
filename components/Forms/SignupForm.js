import {  StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Alert} from 'native-base';
import { useAuthContext } from "../context/AuthContext";
import { API } from '../../data/constants';
import { setToken } from '../context/helper';


const SignupForm = () => {
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
const [message,setMessage] = useState("")
const [username,setUsername] = useState("")
const [nameError, setNameError] = useState("")
const [emailError,setEmailError] = useState("")

        //const { isDesktopView } = useScreenSize();
        //const navigate = useNavigate();

        //const { setUser } = useAuthContext();

        //const [isLoading, setIsLoading] = useState(false);

       // const [error, setError] = useState("");

        const onFinish = async () => {
        //setIsLoading(true);
        try {
            if (username.trim() === "") {

                setNameError("Name required.");

              } else {
                setNameError(null);
              }
            const values = {
                username : username,
                email: Email,
                password: Password
              };
            const response = await fetch(`${API}/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            });

            const data = await response.json();
            if (data?.error) {
            throw data?.error;
            } else {
            // set the token
            //setToken(data.jwt);

            // set the user
           // setUser(data.user);

            //message.success(`Welcome to Social Cards ${data.user.username}!`);

            //navigate("/profile", { replace: true });
            //navigation.navigate("Login")
            }
        } catch (error) {
            console.error(error);
            //setError(error?.message ?? "Something went wrong!");
        } finally {
            //setIsLoading(false);
        }


      };

  return (
    <View style={{
        width: "90%",
        padding: 30
    }}>

            <TextInput
              style={styles.textInput}
              onChangeText={(e)=>setUsername(e)}
              value={username}
              placeholder="Name"

            />
            {!!nameError && (
          <Text style={{ color: "red" }}>{nameError}</Text>
            )}

            <TextInput
              style={styles.textInput}
              onChangeText={(e)=>setEmail(e)}
              value={Email}
              placeholder="Email"
            />

            <TextInput
              style={styles.textInput}
              onChangeText={(e)=>setPassword(e)}
              value={Password}
              placeholder="Password"
            />

            <TextInput
              style={styles.textInput}
              //onChangeText={(e)=>checkPassword(e)}
              placeholder="Confirm Password"
            />


        <Button colorScheme="success" onPress={onFinish} > SignUp </Button>
        <Text > Already have account  ?</Text>
        {/* <Button colorScheme="warning" style={styles.button} onPress={()=>{navigation.navigate("Login")}}> Login </Button> */}
        <Button colorScheme="warning" style={styles.button} > Login </Button>

    </View>
  )
}

const styles = StyleSheet.create({
    textInput : {
                backgroundColor: "#F7F7F7",
                marginBottom: 15,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 10,
    },
    message: {
        color: 'red' 
    }

})

export default SignupForm
