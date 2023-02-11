import {  StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Alert, Center} from 'native-base';
import { useAuthContext } from "../context/AuthContext";
import { API } from '../../data/constants';
import { setToken } from '../context/helper';
import SignupForm from './SignupForm.js';


const LoginForm = ({navigation}) => {
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
const [message,setMessage] = useState("")


    
      const { setUser } = useAuthContext();
    

    

    
      const onFinish = async () => {
        
        try {
          const value = {
            identifier: Email,
            password: Password
          };
          const response = await fetch(`${API}/auth/local`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
          });
         
          const data = await response.json();
          
          if (data?.error) {
            throw data?.error;
          } else {

            setUser(data.user);
            setMessage("Success")
            navigation.navigate("Home")
          
          }
        } catch (error) {
          
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

        <Button colorScheme="success" onPress={onFinish} > Login </Button>
        <Text > Didn't have account  ?</Text>
        <Button colorScheme="warning" style={styles.button} onPress={()=>{navigation.navigate("SignUp")}}> Sign up </Button>
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
    button : {
              paddingVertical: 15,
              margintop : 15
    }
})

export default LoginForm
