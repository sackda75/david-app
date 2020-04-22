import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import CustomHeader from '../CustomHeader'
import Unorderedlist from 'react-native-unordered-list' 
import { Divider } from 'react-native-elements'
import {  MaterialCommunityIcons} from '@expo/vector-icons'
import * as firebase from 'firebase'

const HomeScreenDetail = ({navigation}) => {

  const signOutUser = () => {
    firebase.auth().signOut()
  }

  const br = `\n`
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <CustomHeader title='Home Detail' navigation={navigation}/>
        <View style={styles.container}>

            <View style={styles.must}>

                <View style={{alignSelf: 'center', marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>SOMMAIRE</Text>
                </View>

                <ScrollView>

                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Home</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Home')}>Présentation <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Sommaire</Text></Unorderedlist>
                  </Unorderedlist>
                  <Text>{br}</Text>
                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Jobs</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Jobs')}>Parcours professionnels <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('JobsDetail')}>Les entreprises <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                  </Unorderedlist>
                  <Text>{br}</Text>
                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Formations</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Formations')}>Education <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('FormationsDetail')}>Les écoles de formation <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                  </Unorderedlist>
                  <Text>{br}</Text>
                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Informations</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Informations')}>Renseignements <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('InformationsDetail')}>En savoir plus <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                  </Unorderedlist>

                  <Text>{br}</Text>

                  <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />

                  <Text>{br}</Text>

                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Menu Glissant</Text>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Home')}>Accueil <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Aboutme')}>About Me <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Documents')}>Documents <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={() => navigation.navigate('Mecontacter')}>Me Contacter <MaterialCommunityIcons name='plus-circle' size={16} color='#9400d3' /></Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}} onPress={signOutUser}>Déconnexion <MaterialCommunityIcons name='logout' size={16} color='#9400d3' /></Text></Unorderedlist>
                  </Unorderedlist>

                  </ScrollView>
              </View>
          
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000'
  },
  must: {
    marginHorizontal: 18,
    marginBottom: 50
  }
})

export default HomeScreenDetail