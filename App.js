import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/SplashScreen';
import ProfileScreen from './screens/ProfileScreen';
import Home from './components/Home';
import 'react-native-gesture-handler';
import CustomDrawer from './components/CustomDrawer';
import DiscoverScreen from './screens/DiscoverScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import React, { useEffect, useState } from 'react'
import { firebase } from "./config";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()
const Root = () => {
  return(
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown:false}} initialRouteName="Home">
      <Drawer.Screen name="Home"  component={Home}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
  
 )
}
 function Index() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState()
    
    function onAuthStateChanged(user){
        setUser(user)
        if (initializing) setInitializing(false)
        
    }
    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])
    if (initializing) return null;

    if (!user) {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Sign In' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Sign Up' component={Register} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name='Root' component={Root} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='index' component={Index} options={{headerShown:false}} />
       
        <Stack.Screen name= 'Discover' component={DiscoverScreen} options={{headerShown:false}}/>
      
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
