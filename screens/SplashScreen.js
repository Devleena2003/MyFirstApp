import React, { useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    
} from "react-native";


 
const Splash = ({navigation}) => {
   
    useEffect(() => {
        
      const timer= setTimeout( () => {
            navigation.navigate('index')
        }, 3000)  

        return ()=>clearTimeout(timer)
        
    },[navigation])
      

    return(
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"#fff"}}>
        <Text style={{fontSize:30, fontWeight:"bold", color:'#0F6408' }}>Go Travel</Text>
        </View>
    )
} 
 export default Splash