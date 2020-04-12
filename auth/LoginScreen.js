import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

function LoginScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>LOGIN SCREEN</Text>
            <TouchableOpacity
              style={{marginTop: 10,
                  paddingTop: 15,
                  paddingBottom: 15,
                  marginLeft: 30,
                  marginRight: 30,
                  backgroundColor: '#ffa500',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#fff',
                  width: 150}}  
                onPress={() => navigation.navigate('HomeApp')}
            >
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginTop: 10,
                  paddingTop: 15,
                  paddingBottom: 15,
                  marginLeft: 30,
                  marginRight: 30,
                  backgroundColor: '#ffa500',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#fff',
                  width: 150}}  
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

export default LoginScreen
