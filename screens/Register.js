import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import {firebase} from '../config'


export default function Register({ navigation }) {
  const [name, setName]=useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show,setShow]=useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true);

  registerUser = async (name, email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url:'https://gotravel-ac46c.firebaseapp.com/',
        })
          .then(() => {
          alert('Verfication email sent')
          }).catch((err) => {
          alert(err)
          })
          .then(() => {
            firebase.firestore().collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                name,
                email
              
            })
          })
          .catch((err) => {
          alert(err)
        })
      })
      .catch((err) => {
       alert(err)
     })
  }

 
  return (
    <View style={styles.container}>
        <Text style={{ color: "#D4ADFC", fontSize: 40 ,marginBottom:60}}>Welcome!</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name" value={name}
          placeholderTextColor="#0C134F"
          onChangeText={(name) => setName(name)}
        /> 
      </View> 
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
     
      <TouchableOpacity  onPress={()=>registerUser(name,email,password)} style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text> 

      </TouchableOpacity> 
      <Text style={styles.forgot_button}>Already have an account? <Text style={{color:"#D4ADFC"}} onPress={() =>
                    navigation.navigate('Sign In')}>Log In</Text></Text>  
     
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
    marginTop: 20,
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