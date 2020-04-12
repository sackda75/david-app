import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

function CustomDrawerContent(props) {
      return (

        <SafeAreaView style={{flex: 1}}>

          <View style={{height: 150, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
              <Image
                      style={{width: 100, height: 100, borderRadius: 50}} 
                      source={{uri: 'https://images.unsplash.com/photo-1531356971115-564896495bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} 
              />
          </View>

          <ScrollView style={{marginLeft: 10}}>

                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('MenuTab')}
                  >
                      <Text>Menu Tab</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('Notifications')}
                  >
                      <Text>Notifications</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('Login')}
                  >
                      <Text>Déconnexion</Text>
                  </TouchableOpacity>

          </ScrollView>

        </SafeAreaView>
      )
    }

export default CustomDrawerContent