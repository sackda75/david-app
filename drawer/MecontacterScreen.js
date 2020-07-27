import React from 'react'
import email from 'react-native-email'

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Text, View, SafeAreaView, Linking, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import CustomHeader from '../CustomHeader'

// <Button title="Send Mail" onPress={handleEmail} />

const MecontacterScreen = ({ navigation }) => {

  const br = `\n`

  function handleEmail() {
    const to = ['dsouks@yahoo.fr'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: 'Vous avez un message',
        body: ''
    }).catch(console.error)
  }


    return (
        <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
            <CustomHeader title='Me Contacter' navigation={navigation}/>
            <View style={styles.container}>
                <View style={styles.must}>

                    <View style={{alignSelf: 'center', marginBottom: 10}}>
                          <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>COMMENT ME JOINDRE</Text>
                    </View>

                    <ScrollView>

                    <Text style={styles.vert}>
                  {br}
                      <Text>Vous trouverez dans cette page les différentes possibilités de me joindre :</Text>
                  {br}
                  {br}
                  {br}
                      <FontAwesome5 name='envelope' color='#9400d3' size={15} /><Text style={{fontWeight: 'bold', fontSize: 16}}> PAR COURRIER</Text>{br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> 85 rue du Haut de Senlis, 95470 ST WITZ{br}
                  {br}
                  {br}
                      <MaterialCommunityIcons name='cellphone-iphone' color='#9400d3' size={15} /><Text style={{fontWeight: 'bold', fontSize: 16}}> PAR TELEPHONE</Text>{br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Téléphone portable : 06 21 83 07 03{br}
                  {br}
                  {br}
                      <MaterialCommunityIcons name='linkedin-box' color='#9400d3' size={15} /><Text style={{fontWeight: 'bold', fontSize: 16}}> PAR LINKEDIN</Text>{br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> linkedin.com/in/david-souksavat-5112301a1{br} 
                  {br}
                  {br}
                      <MaterialCommunityIcons name='email-check-outline' color='#9400d3' size={15} /><Text style={{fontWeight: 'bold', fontSize: 16}}> PAR EMAIL</Text>{br}
                      <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> dsouks@yahoo.fr{br} 
                      
                  
                
                  
                    </Text>

                    <View style={{marginBottom: 50, alignItems: 'center'}}>
                        <TouchableOpacity
                              style={{
                                  marginTop: 15,
                                  paddingTop: 15,
                                  paddingBottom: 15,
                                  marginLeft: 30,
                                  marginRight: 30,
                                  backgroundColor: '#ffff ',
                                  borderRadius: 50,
                                  borderWidth: 2,
                                  borderColor: '#9400d3',
                                  width: 170,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                              }}
                              onPress={handleEmail}
                        >
                              <Text style={{ color: '#9400d3', fontWeight: 'bold'}}> ENVOYER UN EMAIL</Text>
                        </TouchableOpacity>
                    </View>

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
  

export default MecontacterScreen