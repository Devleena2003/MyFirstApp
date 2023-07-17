
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Share } from 'react-native';
import {firebase} from '../config'

const CustomDrawer = (props) => {
  
  const [name, setName] = useState('')
  useEffect(() => {
      firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid).get()
          .then((snapshot) => {
              if (snapshot.exists) {
              setName(snapshot.data())
              }
              else {
                  console.log("user doesn't exist")
              }
      })
  },[])

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
         'Wanna Go Somewhere? Sharing you the best app for travel',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };


    return (
        <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: '#0C134F'}}>
        <TouchableOpacity style={{flex: 1, flexDirection:'row',margin:20, gap:10}}  >
           <AntDesign name="user" size={40} color="#D4ADFC" />
            <Text
              style={{
                color: '#D4ADFC',
                fontSize: 25,
               
                marginBottom: 5,
              }}>
              Hello,{name.name}
                    </Text>
                    </TouchableOpacity>
           
         
          <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#EDE4FF'}}>
          <TouchableOpacity onPress= {onShare} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="sharealt" size={24} color="#0C134F" />
              <Text
                style={{
                  fontSize: 15,
               color:'#0C134F',
                  marginLeft: 5,
                }}>
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { firebase.auth().signOut() }} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SimpleLineIcons name="logout" size={24} color="#0C134F" />
              <Text
                style={{
                  fontSize: 15,
              color:'#0C134F',
                  marginLeft: 5,
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


export default CustomDrawer
