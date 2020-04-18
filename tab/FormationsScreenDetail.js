import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image, Linking } from 'react-native'
import CustomHeader from '../CustomHeader'
import { Divider } from 'react-native-elements'
import {  MaterialCommunityIcons} from '@expo/vector-icons'

let laCpasule =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.lacapsule.academy/')}>
      La Capsule
    </Text>

let iut =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('http://www.iut-sceaux.universite-paris-saclay.fr/fr/index.html')}>
      IUT de Sceaux
    </Text>

let ulis =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('http://www.lyc-lessouriau-les-ulis.ac-versailles.fr/')}>
      Lycée de l'Essouriau
    </Text>

const goToTop = () => {
  scroll.scrollTo({x: 0, y: 0, animated: true});
}

function FormationsScreenDetail({navigation}) {
  const br = `\n`
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <CustomHeader title='Formation Detail' navigation={navigation}/>
      <View style={styles.container}>
                    
                    <View style={styles.must}>

                        <View style={{alignSelf: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>LES ECOLES DE FORMATIONS</Text>
                        </View>


                        <ScrollView ref={(c) => {scroll = c}}>
                            
                            <Text style={styles.vert}>
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/lacap.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text>
                                    La Capsule est une école de code pour les entrepreneurs et les Digital Makers qui souhaitent apprendre à coder une appli Web ou Mobile.
                                {br}
                                {br}
                                    En 10 semaines, l’objectif est de donner aux gens les briques techniques nécessaires pour prototyper, coder et piloter une appli Web ou Mobile et les rendre autonomes techniquement. A La Capsule, nous avons à cœur d’offrir à nos élèves une parenthèse de vie, une expérience pédagogique et humaine unique et riche!
                                {br}
                                {br}
                                    L’école est née en 2016, cofondée par Marlene ANTOINAT et Noel PAGANELLI portés par la conviction qu’un virage digital majeur est en route et par l’envie de faire grandir les gens grâce à l’apprentissage du code.
                                    L’école possède aujourd’hui 2 campus à Paris et à Lyon.
                                {br}
                                {br}
                                    <Text>Site internet : {laCpasule}</Text>
                                    </Text>
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
                                    <Text>
                                    L'université Paris-Sud ou Paris-X était une université française créée le 1er janvier 1971. Elle a disparu le 1er janvier 2020 au profit de l'université Paris-Saclay à la suite de la publication au Journal officiel du décret de création de la nouvelle université le 5 novembre 2019.
                                {br}
                                {br}
                                L’Université Paris-Saclay est créée sous la forme dʼun Établissement Public à Caractère Scientifique, Culturel et Professionnel (EPSCP) de type dérogatoire marquant ainsi l’aboutissement d’un processus de coopération dynamique entre universités, grandes écoles et organismes de recherche.
                                {br}
                                {br}
                                L’Université Paris-Saclay propose une large gamme de formations du BAC+2 au doctorat, de haut niveau international, dans les domaines des sciences de la nature et des sciences humaines et sociales.
                                {br}
                                {br} 
                                    <Text>Site internet : {iut}</Text>
                                    </Text>
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
                                    <Text>
                                    Le lycée de l'Essouriau a ouvert à la rentrée 1976, il y a, donc, tout juste quarante ans, avant même la création des Ulis en 1977 . Il s’agissait de deux établissements en un - l’un dédié à l’enseignement général, l’autre à l’enseignement technique – mais relevant d’une même direction. Ils ont été fusionnés en 1991, il y a un quart de siècle, pour donner le lycée polyvalent actuel, en prenant le nom de l’Essouriau.
                                {br}
                                {br}
                                    Le lycée de l’Essouriau a débuté avec un peu moins de 500 élèves. Après un pic de 1 700 au début des années 2000, il en compte aujourd’hui de l’ordre de 1 450. Ce qui le maintient à une échelle humaine. Il a depuis accueilli un public très divers : des jeunes du quartier, de la future ville des Ulis, mais aussi de Bures ou d’Orsay. Nous en recrutions jusqu’à la vallée de Chevreuse avant qu’un lycée n’y soit ouvert.
                                {br}
                                {br}
                                    Pour être complet au plan des formations, nous avons ouvert il y a cinq ans, en 2011, des classes préparatoires aux grandes écoles : PCSI – Physique-Chimie Sciences de l’Ingénieur – et PSI. Le mérite de ce projet en revient à mon prédécesseur. Il découle de cette volonté d’offrir le plus large choix possible à nos élèves.
                                {br}
                                {br}
                                    <Text>Site internet :  {ulis}</Text>
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

export default FormationsScreenDetail