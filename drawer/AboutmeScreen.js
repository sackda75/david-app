import React, { useState } from 'react'

import { SliderBox } from 'react-native-image-slider-box'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'

import CustomHeader from '../CustomHeader'

function AboutmeScreen({ navigation }) {

  const br = `\n`

  const [state, setState] = useState(
    [
      require('../assets/thai2.jpg'),         
      require('../assets/thai1.jpg'),         
      require('../assets/thai3.jpg'),         
      require('../assets/thai4.jpg')
    ]
  )

  const [bolide, setBolide] = useState(
    [
      require('../assets/car1.png'),         
      require('../assets/car2.png'),         
      require('../assets/car3.png'),         
      require('../assets/car4.png')
    ]
  )

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <CustomHeader title='About Me' navigation={navigation}/>

      <View style={styles.container}>

        

            <View style={{alignSelf: 'center', marginBottom: 10}}>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline'}}>A PROPOS DE MOI</Text>
            </View>


                <ScrollView>

                      <View style={styles.must}>
                              <Text style={styles.vert}>Dans cette section, j'aimerais vous présenter mes 2 hobbies : la cuisine thailandaise et l'automobile d'exception.</Text>
                      </View>

                      <Text>{br}</Text>

                      <View style={styles.must}>
                              <Text style={{fontWeight: 'bold', fontSize: 16}}>LA CUISINE THAILANDAISE</Text>
                              <Text style={styles.vert}>La cuisine thaïlandaise n'est pas uniforme d'un bout à l'autre du pays. Ainsi, les plats du sud, comme le curry jaune et le curry de rognons et poissons, sont les plus relevés. Dans les plaines du centre, la nourriture est plus douce, telle le sauté de poulet aux feuilles de basilic. Au nord, on retrouve une grande influence de la cuisine birmane, telle que dans le célèbre potage au curry et nouilles, le kaoh soi. Quant au nord-est, sa cuisine est dérivée de la cuisine laotienne et, bien que considérée à l'origine comme une cuisine paysanne, elle gagne de plus en plus en popularité et certains délices, comme la salade de papaye, som tam, sont connus et appréciés au-delà de ses frontières.</Text>
                      </View>

                      <SliderBox 
                        images={state} 
                        dotColor={'white'}
                        ImageComponentStyle={{borderRadius: 15, width: '89%', marginTop: 15}}
                      />
    
                    <View style={styles.must}>
                              <Text style={styles.vert}>
                          {br}
                              <Text style={{fontWeight: 'bold', fontSize: 16}}>LES PLATS</Text>{br}
                              <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Khao phat{br} 
                              <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Pad thaï {br}
                              <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Kuai tiao{br}
                              <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Jen ta fo{br}
                          {br}
                              </Text>
                    </View>

                    

                    <View style={styles.must}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>L' AUTOMOBILE D'EXCEPTION</Text>
                            <Text style={styles.vert}>Dans le secteur automobile, le marché de l’ultra-luxe est un marché de niche. Il progresse plus rapidement que les autres, Bentley, Lamborghini ou encore Rolls Royce enregistrant des chiffres record. Mais le paradoxe guette : si l’accroissement des ventes se révèle bénéfique pour le résultat de ces grands constructeurs, comment préserver les valeurs essentielles à une entreprise du luxe ? Acquérir une Lamborghini, ce n’est pas acheter une voiture, mais réaliser un rêve. Paradoxe ultime pour un pays qui est numéro 1 des produits de luxe : il se vend aujourd’hui moins de Ferrari, Aston Martin, McLaren, Bentley, Bugatti, Lamborghini, Rolls-Royce, Porsche ou Maserati qu’en Allemagne, qu’en Grande-Bretagne et même qu’en Italie.</Text>
                    </View>

                    <SliderBox 
                      images={bolide} 
                      dotColor={'white'}
                      ImageComponentStyle={{borderRadius: 15, width: '89%', marginTop: 15}}
                    />

                    <View style={styles.must}>
                            <Text style={styles.vert}>
                        {br}
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>LES VOITURES D'EXCEPTION</Text>{br}
                            <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Ferrari LaFerrari{br} 
                            <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Lamborghini Aventador{br}
                            <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Porsche 911{br}
                            <MaterialCommunityIcons name='play' color='#9400d3' size={15} /> Bugatti Chiron{br}
                        {br}
                            </Text>
                    </View>
                      
                </ScrollView>

        

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


export default AboutmeScreen