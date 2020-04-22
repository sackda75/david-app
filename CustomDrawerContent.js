import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as firebase from 'firebase'

function CustomDrawerContent(props) {

    const signOutUser = () => {
        firebase.auth().signOut()
    }


      return (

        <SafeAreaView style={{flex: 1}}>

          <View style={{height: 200, alignItems: 'center', justifyContent: 'center', marginTop: 0, backgroundColor: '#9400d3'}}>
              <Image
                      style={{width: 120, height: 120, borderRadius: 60}} 
                      source={require('./assets/dave.png')}
              />
          </View>

          <ScrollView style={{marginLeft: 10, marginTop: 60}}>

                
                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('Accueil')}
                  >
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                            name="home-circle" 
                            color='#9400d3'
                            size={30}
                        />
                        <View style={{justifyContent: 'center'}}><Text>     Accueil</Text></View>
                    </View>
                  </TouchableOpacity>
               
                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('Aboutme')}
                  >
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                            name="account-box-multiple" 
                            color='#9400d3'
                            size={30}
                        />
                        <View style={{justifyContent: 'center'}}><Text>     About Me</Text></View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('Documents')}
                  >
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                            name="file-download" 
                            color='#9400d3'
                            size={30}
                        />
                        <View style={{justifyContent: 'center'}}><Text>     Documents</Text></View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => props.navigation.navigate('Mecontacter')}
                  >
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                            name="email" 
                            color='#9400d3'
                            size={30}
                        />
                        <View style={{justifyContent: 'center'}}><Text>     Me Contacter</Text></View>
                    </View>
                  </TouchableOpacity>
                 
                  <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={signOutUser}
                  >
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                            name="logout" 
                            color='#9400d3'
                            size={30}
                        />
                        <View style={{justifyContent: 'center'}}><Text>     Déconnexion</Text></View>
                    </View>
                  </TouchableOpacity>
                  
          </ScrollView>

        </SafeAreaView>
      )
    }

export default CustomDrawerContent