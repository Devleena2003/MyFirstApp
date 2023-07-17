import React, {useEffect,useState} from 'react'
import {StyleSheet, ScrollView, Image,TouchableOpacity ,Text, View } from 'react-native'
import { firebase } from '../config'
import { Entypo } from '@expo/vector-icons';

export default function ProfileScreen() {
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
    return (
      <View style={styles.flexA}>
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.userProfile}>
          <View style={styles.userProfileTop}>
           
          
            <View style={styles.avatar}>
              <View style={styles.avatarContainer}>
                  <Entypo style={{position:'absolute', bottom:25}} name="user" size={50} color="#0C134F" />
              </View>
            
            </View>
            <View style={styles.userProfileInfo}>
                <Text style={styles.userProfileInfoName}>{name.name}</Text>
            
            </View>
           
          </View>
            <View style={styles.userProfileBody}>
              
              
          
              <TouchableOpacity style={styles.btnA} >
                <Text style={styles.btnTextA} >
                  Edit Profile
                </Text>
              </TouchableOpacity>
             
           
           
          </View>
        </View>
      </ScrollView>
    </View>
    )
  
}
const styles = StyleSheet.create( {
  flexA: {
    flex: 1,
    backgroundColor:'#1D267D'
  },
  base: {
    flexGrow: 1,
  },
  userProfile: {
    flex: 1,
  },
  userProfileTop: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    minHeight: 70,
  },
  userProfileTopBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: null,
    height: null,
  },
  userProfileTopOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: null,
    height: null,
    backgroundColor: '#1D267D',
   
  },
  avatar: {
    flexShrink: 0,
    width: 128,
    height: 128,
  },
  avatarContainer: {
    position: 'absolute',
    top: 12,
    left: 15,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderRadius: 64,
    backgroundColor: '#D4ADFC',
    overflow: 'hidden',
  },
  avatarImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  avatarStatus: {
    position: 'absolute',
    right: 10.1,
    bottom: 10.1,
    width: 20,
    height: 20,
   
  },
  userProfileInfo: {
    paddingHorizontal: 24,
  },
  userProfileInfoName: {
    paddingTop: 10,
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center',
  },
  userProfileInfoJobTitle: {
    marginTop: 4,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
 
  userProfileBody: {
    flexGrow: 1,
    paddingTop: 24,
    paddingBottom: 100,
    paddingLeft:120
  },
  flexB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  btnA: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width:'50%',
    
    backgroundColor: '#0C134F',
    borderRadius: 8,
   
   
  },
  btnTextA: {
    color: '#ffffff',
    fontSize: 20,
  },
  


});
