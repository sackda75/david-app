import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={{ flexDirection: 'row', height: 50, marginTop: 30}}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
          isHome?
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons
                  name='menu' 
                  size={35}
                /> 
            </TouchableOpacity>
          : 
          <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 5 }}>
            <MaterialCommunityIcons
                  name='backspace-outline' 
                  size={35}
                  onPress={() => navigation.goBack()}
            /> 
          </View>
        }
      </View>
        <View style={{ flex: 1.5, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>{title}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
    </View>
  )
}

export default CustomHeader