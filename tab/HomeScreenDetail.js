import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import CustomHeader from '../CustomHeader'
import Unorderedlist from 'react-native-unordered-list' 
import { Divider } from 'react-native-elements'

const HomeScreenDetail = ({navigation}) => {
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
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Présentation</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Sommaire</Text></Unorderedlist>
                  </Unorderedlist>
                  <Text>{br}</Text>
                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Jobs</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Parcours professionnels</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Les entreprises</Text></Unorderedlist>
                  </Unorderedlist>
                  <Text>{br}</Text>
                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Formations</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Education</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Les écoles de formation</Text></Unorderedlist>
                  </Unorderedlist>
                  <Text>{br}</Text>
                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Informations</Text>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Renseignements</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>En savoir plus</Text></Unorderedlist>
                  </Unorderedlist>

                  <Text>{br}</Text>

                  <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />

                  <Text>{br}</Text>

                  <Unorderedlist bulletUnicode={0x29BF} style={{fontSize: 18}}><Text style={{fontSize: 18}}>Menu Glissant</Text>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Accueil</Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>About Me</Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Documents</Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Me Contacter</Text></Unorderedlist>
                      <Unorderedlist bulletUnicode={0x2023} color='#9400d3' style={{fontSize:  16}}><Text style={{fontSize:  16}}>Déconnexion</Text></Unorderedlist>
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