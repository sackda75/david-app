import React from 'react'
import { Text, View, SafeAreaView, Linking, StyleSheet, ScrollView } from 'react-native'
import CustomHeader from '../CustomHeader'
import { MaterialCommunityIcons } from '@expo/vector-icons'

let monCv =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1MRRYv9VEtUF_dNfFrMrJdNJCct-5YNLJ')}>
      CV David SOUKSAVAT
    </Text>

let lacap =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1WvlJBWjsakcclR6RjOUKeNRmdznQa0PF')}>
      Attestation
    </Text>

let lacap2 =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1zD6JqpeHXeJRM5CP_eh5I1LtJuQuLn5_')}>
      Certificat
    </Text>

let dutdip =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1z02wF4wbs3sZDSGPQlcQcplyiGDsktq1')}>
      Diplôme DUT
    </Text>

let bacdip =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1tbHt8lqmjjSyWXexzub6DlLVp8fMp6Za')}>
      Diplôme BAC
    </Text>

let level1 =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1ATroIM9Yft7VM39bvpPfRS9cai71iclG')}>
      Certificate level 1
    </Text>

const DocumentsScreen = ({ navigation }) => {
  const br = `\n`
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
            <CustomHeader title='Documents' navigation={navigation}/>
            <View style={styles.container}>
                <View style={styles.must}>

                    <View style={{alignSelf: 'center', marginBottom: 10}}>
                          <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>FICHIERS PDF</Text>
                    </View>

                    <ScrollView>

                    <Text style={styles.vert}>
                  {br}
                      <Text>Vous trouverez dans cette page les liens pour télécharger des documents tels que des diplômes ou des attestations.</Text>
                  {br}
                  {br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /><Text> Curriculum vitæ : {monCv}</Text>
                  {br}
                  {br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /><Text> Attestation de fin de formation : {lacap}</Text>
                  {br}
                  {br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /><Text> Certificat de La Capsule : {lacap2}</Text>
                  {br}
                  {br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /><Text> Diplôme DUT : {dutdip}</Text>
                  {br}
                  {br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /><Text> Diplôme BAC : {bacdip}</Text>
                  {br}
                  {br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /><Text> Level 1 certificate english : {level1}</Text>
                  {br}
                  {br}
                
                    </Text>

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
    marginHorizontal: 20,
    marginTop: 50
  },
  vert: {
    textAlign: 'justify'
  }
})
  

export default DocumentsScreen 