import React from 'react'

import { Divider } from 'react-native-elements'
import {  MaterialCommunityIcons} from '@expo/vector-icons'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'

import CustomHeader from '../CustomHeader'

function FormationsScreen({navigation}) {
  const br = `\n`
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <CustomHeader title='Formations' isHome={true} navigation={navigation}/>

        <View style={styles.container}>
                    
                    <View style={styles.must}>

                        <View style={{alignSelf: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>EDUCATION</Text>
                        </View>


                        <ScrollView>
                            
                            <Text style={styles.vert}>
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/lacap.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontStyle: 'italic'}}>Janvier à Mars 2020</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>LA CAPSULE BOOTCAMP</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Paris (75){br} 
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> 10 semaines de formation{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Développeur Full Stack Web et Mobile{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> REACT <MaterialCommunityIcons name='react' color='#1B1464' size={18} /> - REACT NATIVE <MaterialCommunityIcons name='react' color='#48dbfb' size={18} /> - Redux{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> HTML <MaterialCommunityIcons name='language-html5' color='#d35400' size={18} /> - CSS <MaterialCommunityIcons name='language-css3' color='#54a0ff' size={18} />{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> JAVASCRIPT <MaterialCommunityIcons name='language-javascript' color='#ffd32a' size={18} /> - JQUERY <MaterialCommunityIcons name='jquery' color='#3867d6' size={18} />{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Node.JS <MaterialCommunityIcons name='nodejs' color='#44bd32' size={18} /> - Express - MongoDB{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Git <MaterialCommunityIcons name='git' color='#e84118' size={18} /> - Github <MaterialCommunityIcons name='github-circle' color='#1e272e' size={18} /> - Heroku{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Firebase <MaterialCommunityIcons name='firebase' color='#f39c12' size={18} />{br}
                                {br}
                                {br}
                                <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/iut.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontStyle: 'italic'}}>1995 - 1997</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>IUT DE SCEAUX</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>UNIVERSITE DE PARIS-SACLAY</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Sceaux (92){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> DUT Techniques de commercialisation{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> option marketing{br} 
                                {br}
                                {br}
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/ulis.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontStyle: 'italic'}}>1993 -  1994</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>LYCEE DE L'ESSOURIAU</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Les Ulis (91){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Baccalauréat B{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Sciences économiques et sociales{br}
                                {br}  
                                
                            </Text>

                            <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />

                            <Text>{br}</Text> 

                            <Text onPress={() => navigation.navigate('FormationsDetail')}>
                            <MaterialCommunityIcons name='plus-circle-outline' color='#9400d3' size={18} /> Plus d'informations sur les écoles
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
                                    onPress={() => navigation.navigate('FormationsDetail')}
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

export default FormationsScreen