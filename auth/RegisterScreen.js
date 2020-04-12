import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import CustomHeader from '../CustomHeader'

function RegisterScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <CustomHeader title='Register à côte du menu' navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Register Milieu</Text>
        </View>
      </SafeAreaView>
    )
  }

export default RegisterScreen