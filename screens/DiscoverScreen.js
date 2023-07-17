import React from 'react'
import { Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function DiscoverScreen() {
  
    return (
      <View style={{margin:30}}>
            <Text style={{fontSize:30}}>Discover </Text>
            <Text style={{ fontSize: 20 }}>the beauty of Nature</Text>
            
            <SearchBar />
            <Text>Top Places</Text>
            
      </View>
    )
  
}


