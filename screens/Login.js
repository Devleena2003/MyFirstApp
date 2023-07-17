import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {firebase} from '../config'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show,setShow]=useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true);
  const navigation = useNavigation()
  
  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password)
    }
    catch (err) {
      alert(err)
    }
  }
 
  const forgotPassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
      alert('Password reset email sent')
      }).catch((err) => {
      alert(err)
    }) 
  }
 

  return (
    <View style={styles.container}>
        <Text style={{ color: "#D4ADFC", fontSize: 40 ,marginBottom:60}}>Welcome Again!</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <Text style={{ position: 'absolute',
    left: 35,
    top:20}}> <MaterialCommunityIcons name={ 'email'} size={20} color={'#0C134F'}/></Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email" value={email}
          placeholderTextColor="#0C134F"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <Text style={{ position: 'absolute',
    left: 35,
    top:20}}> <MaterialCommunityIcons name={ 'lock'} size={20} color={'#0C134F'}/></Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Password" value={password}
          placeholderTextColor="#0C134F"
          secureTextEntry={passwordVisible}
         onChangeText={(password) => setPassword(password)}
          
        /> 
        <TouchableOpacity style={styles.btnEye} onPress={() => {
          setPasswordVisible(!passwordVisible)
          setShow(!show)
        }}>
          <MaterialCommunityIcons name={ show===false?'eye-outline':'eye-off-outline'} size={20} color={'#0C134F'} />
        </TouchableOpacity>
      </View> 
      <TouchableOpacity onPress={()=>forgotPassword()}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity onPress={()=> loginUser(email,password)} style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text> 

      </TouchableOpacity> 
      
      <Text style={{ height: 30,
        color: '#EDE4FF', marginTop: 10
      }}> Don't have an account? <Text style={{ color: "#D4ADFC" }} onPress={() =>
         navigation.navigate('Sign Up')}>Register</Text></Text>  
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C134F",
    alignItems: "center",
    justifyContent: "center",
  },
  small_txt:{
    height: 30,
  marginTop:20,
    color:'#0F6408'
  },
  googleBtn: {
    width: "50px ",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#d9d9d9",
  },
  image:{
     width: '50px'
  },
  btnEye:{
    position: 'absolute',
    right: 25,
    top:20
 },
  inputView: {
    backgroundColor: "#EDE4FF",
    borderRadius: 30,
    width: "80%",
    height: 60,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
   
  },
  forgot_button: {
    height: 30,
   color:'#EDE4FF'
   
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#D4ADFC",
  },
});