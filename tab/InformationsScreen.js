import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import CustomHeader from '../CustomHeader'
import { Divider } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function InformationsScreen({ navigation }) {
  const br = `\n`
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <CustomHeader title='Informations' isHome={true} navigation={navigation}/>
        <View style={styles.container}>
                    
                    <View style={styles.must}>

                        <View style={{alignSelf: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>RENSEIGNEMENTS</Text>
                        </View>


                        <ScrollView>
                            
                            <Text style={styles.vert}>
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/lang.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>LANGUES</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Anglais : lu, parlé et écrit{br} 
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Chinois dialecte teo-chew : parlé{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Allemand: notions{br}
                                {br}
                                {br}
                                <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/gsm.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>COORDONNEES</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> 85 rue du Haut de Senlis, 95470 ST WITZ{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Téléphone portable : 06 21 83 07 03{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Email : dsouks@yahoo.fr{br} 
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> linkedin.com/in/david-souksavat-5112301a1{br} 
                                {br}
                                {br}
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/car.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>INFORMATIONS COMPLEMENTAIRES</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Permis B{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Véhiculé{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Pacsé{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> 1 enfant{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Né le 17/07/1975{br}
                                {br}
                                {br}
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/globe.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>CENTRES D'INTERET</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Economie{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Finance{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Automobile{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Actualités du sport{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Fan de Formule 1{br}
                                {br}    
                                
                            </Text>

                            <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />

                            <Text>{br}</Text> 

                            <Text onPress={() => navigation.navigate('InformationsDetail')}>
                            <MaterialCommunityIcons name='plus-circle-outline' color='#9400d3' size={18} /> Suite des informations
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
                                    onPress={() => navigation.navigate('InformationsDetail')}
                                >
                                        <MaterialCommunityIcons name='chevron-right' color='#9400d3' size={23} />
                                        <Text style={{ color: '#9400d3', fontWeight: 'bold'}}> VALIDER</Text>
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
  },
  vert: {
    textAlign: 'justify'
  }
})

export default InformationsScreen