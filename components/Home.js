import { StyleSheet, Text, TouchableOpacity, View,Image ,ImageBackground, Button} from 'react-native';



const Home = ({navigation}) => {
   
    return(
        <View style={{ flex: 1 }}>
           
    <ImageBackground source={require('../assets/2.jpg')} resizeMode="cover" style={{  height: "100%"}}>  
                  <View style={{ marginTop: 50, paddingLeft: 15, flexDirection: 'row',gap:20 }}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color:'#fff' }}>Go Travel</Text>
        
             </View>
          <View style={{marginTop:40, paddingLeft:15}}>
        <Text style={{fontSize:30}}>Enjoy the trip with</Text>
        <Text style={{
           fontSize: 35, color:"#4DABB7",marginTop:15
                 }}>Good Moments</Text>
                </View>
                
                <TouchableOpacity style={{padding:15, backgroundColor:'transparent', width: "30%", borderRadius:10, borderWidth:2, borderColor:"#4DABB7", marginLeft:20, marginTop:40}} onPress={()=>navigation.navigate('Discover')}>
                    <Text style={{fontSize:20, color:'#fff', marginLeft:20}}>Go</Text>
               </TouchableOpacity>
            </ImageBackground>
           
          
        </View>
    )
}
export default Home