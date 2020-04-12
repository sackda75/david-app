import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader'

function SettingsScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <CustomHeader title='Settings' isHome={true} navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting !!!</Text>
            <TouchableOpacity
              style={{marginTop: 10,
                paddingTop: 15,
                paddingBottom: 15,
                marginLeft: 30,
                marginRight: 30,
                backgroundColor: '#008000',
                borderRadius: 40,
                borderWidth: 1,
                borderColor: '#fff',
                width: 180}}              
                onPress={() => navigation.navigate('SettingsDetail')}
            >
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Go Page Setting Detail</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

export default SettingsScreen