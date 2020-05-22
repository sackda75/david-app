import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image, Linking } from 'react-native'
import CustomHeader from '../CustomHeader'
import { Divider } from 'react-native-elements'
import {  MaterialCommunityIcons } from '@expo/vector-icons'

let laCpasule =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.lacapsule.academy/')}>
      La Capsule
    </Text>

let galLaf =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.groupegalerieslafayette.fr/')}>
      Galeries Lafayette
    </Text>

let sap =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.servicesalapersonne.gouv.fr/')}>
      Services à la personne
    </Text>

let matmut =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.matmut.fr/')}>
      Matmut
    </Text>

let starbx =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://www.starbucks.fr/')}>
      Starbucks Coffee
    </Text>

let sodistrel =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('http://sodistrel.com/')}>
      Sodistrel
    </Text>

const goToTop = () => {
  scroll.scrollTo({x: 0, y: 0, animated: true});
}


function JobsScreenDetail({navigation}) {
  const br = `\n`
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <CustomHeader title='Jobs Detail' navigation={navigation}/>
      <View style={styles.container}>
                    
                    <View style={styles.must}>

                        <View style={{alignSelf: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>LES ENTREPRISES</Text>
                        </View>


                        <ScrollView ref={(c) => {scroll = c}}>
                            
                            <Text style={styles.vert}>
                                    <Image 
                                        style={{width: 60, height: 60}}
                                        source={require('../assets/lacapsule.png')}
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
                                        source={require('../assets/rqz.png')}
                                    />
                                {br}
                                {br}
                                {br}
                                    <Text>
                                    Spécialiste de la mode implanté au cœur des villes, le groupe Galeries Lafayette se développe comme une référence du commerce omnicanal. Il contribue, en France et dans le monde, à faire rayonner un certain Art de Vivre à la française à travers toutes ses marques.
                                {br}
                                {br}
                                    Fort de son patrimoine architectural et d’une solide culture de l’innovation, le groupe Galeries Lafayette accueille chaque année plus de 60 millions de visiteurs dans 290 magasins et sur ses sites e-commerce. Il entretient un lien historique et affectif avec ses clients qui continue à vivre sur tous ses points de rencontre, physiques ou digitaux, pour leur offrir le meilleur du commerce et de la création.
                                {br}
                                {br}
                                    Le Groupe bénéficie aujourd’hui d’une reconnaissance internationale reposant sur des marques emblématiques : Galeries Lafayette, BHV MARAIS, La Redoute, Eataly Paris Marais, Galeries Lafayette-Royal Quartz Paris, Louis Pion, Mauboussin et BazarChic. Il accompagne la transformation patrimoniale, digitale et créative de celles-ci avec le concours de Citynove, Lafayette Plug and Play et Lafayette Anticipations - Fondation d’entreprise Galeries Lafayette.
                                {br}
                                {br} 
                                    <Text>Site internet : {galLaf}</Text>
                                    </Text>
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
                                    <Text>
                                    Les services à la personne englobent diverses prestations fournies à domicile et répondant à un besoin à caractère social.
                                {br}
                                {br}
                                    Les activités de services à la personne peuvent être exercées librement, à l’exception des activités destinées aux publics fragiles (jeunes enfants, personnes âgées ou handicapées) qui nécessitent parfois un agrément.
                                {br}
                                {br}
                                    Pour bénéficier des avantages sociaux et fiscaux, les organismes de services à la personne, qu’ils soient ou non agréés, doivent faire l’objet d’une déclaration d’activité, les contraignant à respecter certaines règles. Une décision de retrait de déclaration peut être prononcée en cas de non-respect de celles-ci, entraînant la radiation de l’organisme, notamment de l’annuaire des organismes de services à la personne.
                                {br}
                                {br}
                                    <Text>Site internet : {sap}</Text>
                                    </Text>
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
                                    <Text>
                                    La Matmut est une société d'assurance mutuelle, chargée de la stratégie du Groupe et des fonctions centrales. Elle possède toutes les filiales opérationnelles d'assurance et apporte également aux assurés des prestations en matière de protection juridique vie privée et d'assistance. Enfin elle conçoit, gère et distribue les contrats d'assurance « dommages » pour les particuliers.
                                {br}
                                {br}
                                    Créée en 1961, la Matmut est au service de ses sociétaires. Acteur majeur sur le marché français, le Groupe Matmut assure aujourd'hui près de 3,8 millions de sociétaires et plus de 7,2 millions de contrats.
                                {br}
                                {br}
                                    Il offre à tous - particuliers, professionnels, entreprises, associations - une gamme complète de produits d'assurance des biens et des personnes (auto, moto, habitation, bateau, chasse, responsabilités, protection de la famille, santé, prévoyance, protection juridique, assistance) et de services financiers et d'épargne (crédits auto, crédit consommation, livret d'épargne, assurance-vie, assurance emprunteur...).
                                {br}
                                {br}
                                    <Text>Site internet : {matmut}</Text>
                                    </Text>
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
                                    <Text>
                                    Starbucks Corporation est une chaîne de cafés américaine fondée en 1971. En partie en franchise[réf. nécessaire], il s'agit de la plus grande chaîne de ce genre dans le monde, avec 310 256 établissements implantés dans 78 pays, dont 12 000 aux États-Unis.
                                {br}
                                {br}
                                    Les établissements Starbucks vendent exclusivement leur propre marque de café (moulu ou en grains), du thé, des boissons, des pâtisseries, des ustensiles et des machines à café, mais l'entreprise vise principalement à « offrir une expérience-consommateur » (deliver consumer experience en anglais), c’est-à-dire de proposer à sa clientèle un service unique qu’elle ne retrouvera pas dans les cafés d’une autre enseigne (confort, calme,…).
                                {br}
                                {br}
                                    Starbucks Coffee Company est à l'origine un commerce spécialisé dans le café en grains. L'entreprise est officiellement devenue Starbucks Corporation en 1987 après son acquisition par Howard Schultz2, tout en continuant à communiquer sous le nom de Starbucks Coffee Company.
                                {br}
                                {br}
                                    <Text>Site internet : {starbx}</Text>
                                    </Text>
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
                                    <Text>
                                    Sodistrel est une PME spécialisée dans l’identification et la traçabilité dans les activités industrielles. Pour l’impression des étiquettes, le transfert thermique est la solution optimale pour résister aux contraintes pointues des clients (UV, solvants, normes aéronautiques, températures, humidité…). Notre expertise dans le domaine de l’étiquette technique nous permet de répondre aux cahiers des charges les plus exigeants.
                                {br}
                                {br}
                                    Depuis 40 ans, Sodistrel distribue et innove dans l'impression d'étiquettes techniques et solutions d'impressions pour l'industrie
                                {br}
                                {br}
                                    Sodistrel est fort de sa présence sur des marchés diversifiés : aéronautique (civil et militaire), spatial, défense & sécurité, ferroviaire, médical, pétrochimie, électrique et Datacom, Telecom.
                                {br}
                                {br}
                                    <Text>Site internet : {sodistrel}</Text>
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

export default JobsScreenDetail