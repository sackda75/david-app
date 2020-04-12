import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader'

function HomeScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <CustomHeader title='Home' isHome={true} navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home !!!</Text>
            <View>
                <TouchableOpacity
                    style={{marginTop: 10,
                      paddingTop: 15,
                      paddingBottom: 15,
                      marginLeft: 30,
                      marginRight: 30,
                      backgroundColor: '#00BCD4',
                      borderRadius: 40,
                      borderWidth: 1,
                      borderColor: '#fff',
                      width: 180}}
                    onPress={() => navigation.navigate('HomeDetail')}
                >
                    <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Go Page Home Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    )
  }

export default HomeScreen