import React from 'react'

import { Divider } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'

import CustomHeader from '../CustomHeader'

function JobsScreen({navigation}) {
    const br = `\n`
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
            <CustomHeader title='Jobs' isHome={true} navigation={navigation}/>
            
                <View style={styles.container}>
                    
                    <View style={styles.must}>

                        <View style={{alignSelf: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>PARCOURS PROFESSIONNELS</Text>
                        </View>


                        <ScrollView>
                            
                            <Text style={styles.vert}>
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/lacapsule.png')}
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
                                        source={require('../assets/rqz.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontStyle: 'italic'}}>2016 - 2020</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>GALERIES LAFAYETTE ROYAL QUARTZ</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Aéroport Roissy Charles de Gaulle (95){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Conseiller de vente en horlogerie{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Commercialisation des marques premiums{br} 
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> ROLEX, CARTIER, BREITLING, OMEGA{br} 
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> JEAGER-LECOULTRE, GUCCI, LONGINES{br} 
                                {br}
                                {br}
                                
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/sap.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text style={{fontStyle: 'italic'}}>2009 -2016</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>ALLO C'CLEAN</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> La Chapelle en Serval (60){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Responsable d’agence{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Société de services à la personne{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Ménage et repassage auprès des particuliers{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Relation clientèle{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Gestion du planning{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Gestion administrative{br}
                                {br}
                                {br}  
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/matmut.png')}
                                    />
                                {br}
                                {br}
                                {br} 
                                <Text style={{fontStyle: 'italic'}}>2004 -2009</Text>{br} 	
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>MATMUT</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Antony (92){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Chargé d'accueil clientèle{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Commercialisation de produits d'assurance{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Assurance automobile{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Assurance habitation{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Accidents de la vie auprès des particuliers{br}
                                {br}
                                {br}
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/star.png')}
                                    />
                                {br}
                                {br}
                                {br}   
                                    <Text style={{fontStyle: 'italic'}}>2002 -2004</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>STARBUCKS COFFEE</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Londres (GB){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Supervisor{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Responsable de shift{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Responsable de la qualité des produits{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Responsable du stock{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Management d'une équipe de 4 personnes{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Rapport journalier du chiffres d'affaires{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Ventilation des produits vendus{br}
                                {br}
                                {br}
                                <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/sodi.png')}
                                    />
                                {br}
                                {br}
                                {br}   
                                    <Text style={{fontStyle: 'italic'}}>1998 -2002</Text>{br}
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>SODISTREL</Text>{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Nozay (91){br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Commercial itinérant{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Commercialisation des produits BRADY{br}
                                    <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Vente de solutions d'identification industrielle{br}
                               
                            </Text>

                            <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />

                            <Text>{br}</Text> 

                            <Text onPress={() => navigation.navigate('JobsDetail')}>
                            <MaterialCommunityIcons name='plus-circle-outline' color='#9400d3' size={18} /> Plus d'informations sur les entreprises
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
                                    onPress={() => navigation.navigate('JobsDetail')}
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

export default JobsScreen