import React from 'react'
import MapView from 'react-native-map-clustering'

import { Marker } from 'react-native-maps'
import { Divider } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image, Linking } from 'react-native'

import CustomHeader from '../CustomHeader'

let stWitz =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.saint-witz.fr/')}>
      St Witz
    </Text>

let teo =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://fr.wikipedia.org/wiki/Teochew_(dialecte)')}>
      Teo Chew
    </Text>

let formula =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.formula1.com/')}>
      Formula 1
    </Text>

const goToTop = () => {
  scroll.scrollTo({x: 0, y: 0, animated: true })
}

function InformationsScreenDetail({navigation}) {
  const br = `\n`
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <CustomHeader title='Informations Detail' navigation={navigation}/>
      <View style={styles.container}>
                    
                    <View style={styles.must}>

                        <View style={{alignSelf: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>EN SAVOIR PLUS</Text>
                        </View>


                        <ScrollView ref={(c) => {scroll = c}}>
                            
                            <Text style={styles.vert}>

                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/teo.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>LA LANGUE TEO CHEW</Text>{br}
                                    Le teochew (Pêh-uē-jī romanisation: Tiê-chiu-uē; romanisation peng'im : Dio-ziu-uê; chinois : 潮州話 ; mandarin (pinyin) : Cháozhōuhuà ; également : teochiu, tiociu, diojiu'ue, chiuchow, chaozhouhua) est un dialecte minnan, parlé à l'extrême Est de la province de Guangdong, dans la région de Chaoshan.
                                {br}
                                {br}
                                    Le teochew moderne provient de l'évolution du minnan ancien. Entre les ixe et xve siècles, un groupe de population parlant le minnan (閩南/闽南) migra vers le Sud de Fujian, sur la partie littorale de l'Est de la province du Guangdong (廣東省/广东省), connue aujourd'hui sous le nom de Chaoshan (潮汕). On suppose que la cause de cette émigration fut un problème de surpopulation du Fujian.
                                {br}
                                {br}
                                    Le teochew est également parlé par quelques minorités significatives à Hong Kong, au Viêt Nam, en Malaisie, à Singapour et en Indonésie. On trouve aussi des locuteurs en Australie, en Nouvelle-Zélande, en Amérique du Nord et en Europe (le quartier chinois du XIIIe arrondissement de Paris abrite de nombreux locuteurs teochew), moins par émigration directe de Chaoshan que d'Asie du Sud-Est.
                                {br}
                                {br} 
                                    <Text>Site internet : {teo}</Text>
                                    </Text>
                                {br}
                                {br}
                                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/stwitz.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>ST WITZ</Text>{br}
                                {br}
                                    <MapView  
                                            initialRegion={{
                                                latitude: 49.090855,
                                                longitude: 2.565023,
                                                latitudeDelta: 0.0922,
                                                longitudeDelta: 0.0461,
                                            }} 
                                            style={{ width: 330, height: 400 }}  
                                    >  
                                        <Marker coordinate={{ latitude: 49.090855, longitude: 2.565023 }} title={'My Home'} />   
                                    </MapView>
                                {br}
                                    Saint-Witz (prononciation : sɛ̃vits) est une commune du Val-d'Oise située en plaine de France, à environ 31 km au nord-est de Paris et à 9 km de l'aéroport Roissy-Charles-de-Gaulle. Ses habitants sont les Wézien(ne)s, Vézéen(ne)s ou Vézien(ne)s. Elle appartient à l'unité urbaine de Fosses et à l'aire urbaine de Paris.
                                {br}
                                {br}
                                    La commune est la plus orientale du département du Val-d'Oise (avec Vémars), aux confins de l'Oise et de la Seine-et-Marne. Elle est limitrophe de Fosses, Survilliers, Plailly (Oise), Mortefontaine (Oise), Vémars, Villeron et Marly-la-Ville.
                                {br}
                                {br}
                                    Saint-Witz est distante, à vol d'oiseau, de 7 kilomètres des abords nord de l’aéroport de Paris-Charles-de-Gaulle. Un accès autoroutier est très proche: sortie no 7 de l'autoroute A1 Paris-Lille.
                                    Saint-Witz s'étage sur le versant sud-ouest de la butte-témoin de butte de Montmélian, l'une des principales buttes-témoins du département de l'Oise et du nord de l'Île-de-France. Culminant à 203 m au-dessus du niveau de la mer, on le repère de loin avec sa tour de télécommunications, et avec lui, le village de Saint-Witz.
                                {br}
                                {br}
                                    <Text>Site internet : {stWitz}</Text>
                                    </Text>
                                {br}
                                {br}
                                <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/f1.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text>
                                    La Formule 1, communément abrégée en F1, est une discipline de sport automobile considérée comme la catégorie reine de ce sport. Elle a pris au fil des ans une dimension mondiale et elle est, avec les Jeux olympiques et la Coupe du monde de football, l'un des événements sportifs les plus médiatisés.
                                {br}
                                {br}
                                Chaque année depuis 1950, un championnat mondial des pilotes est organisé, complété depuis 1958 par un championnat mondial des constructeurs automobiles. La compétition est basée sur des Grands Prix, courses à bord de voitures monoplaces disputées sur circuits routiers fermés permanents mais parfois tracés en ville et temporaires, comme à Monaco, Singapour, et Bakou.
                                {br}
                                {br}
                                Outre la compétition, le terme Formule 1 désigne l'ensemble des règles techniques des voitures monoplaces qui sont mises à jour tous les ans par la FIA. Ces règles sont très strictes sur les dimensions des voitures, la cylindrée des moteurs, les technologies mises en œuvre ; elles définissent également les mesures de sécurité des voitures pour assurer la protection du pilote. Les monoplaces de course répondant aux caractéristiques de la réglementation de la Formule 1 sont généralement désignées sous le terme générique de Formules 1.
                                {br}
                                {br}
                                    <Text>Site internet :  {formula}</Text>
                                    </Text>
                              
                          
                            </Text>

                            <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />

                            <Text>{br}</Text> 

                            <Text onPress={goToTop}>
                            <MaterialCommunityIcons name='chevron-up-circle' color='#9400d3' size={18} /> Retour vers le haut de la page
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
                                    onPress={goToTop}
                                >
                                    <MaterialCommunityIcons name='chevron-up' color='#9400d3' size={23} />
                                    <Text style={{ color: '#9400d3', fontWeight: 'bold'}}> RETOUR EN HAUT</Text>
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

export default InformationsScreenDetail