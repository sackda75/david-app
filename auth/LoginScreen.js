import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import PassMeter from 'react-native-passmeter'
import * as Animatable from 'react-native-animatable'
import * as firebase from 'firebase'

const MAX_LEN = 15, MIN_LEN = 6, PASS_LABELS = ["Trop court", "Faible", "Normal", "Fort", "Sécurité maximale"]

function LoginScreen({navigation}) {

  const [email, setEmail] = useState("")
  console.log(email)

  const [password, setPassword] = useState("")
  console.log(password)

  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = () => {
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message))
}

    return (
      <SafeAreaView style={{ flex: 1}}>
        <ImageBackground style={styles.container} source={require('../assets/fond4.png')} >

            <KeyboardAvoidingView>

            <Animatable.Image 
                animation='bounceInDown'
                duration={1500}
                style={{width: 150, height: 150, top: 1}}
                source={require('../assets/logo1.png')}
            />

            </KeyboardAvoidingView>              

            <View style={styles.errorMessage}>
                <Text style={{textAlign: 'center'}}>{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}</Text>
            </View>


            <Animatable.View
                animation='bounceInRight'
                duration={1500}
            >
                <Text style={styles.must}>Se connecter</Text>
            </Animatable.View>

              <Animatable.View
                animation='bounceInRight'
                duration={1500}
              >
                <TextInput 
                    style={styles.input}
                    placeholder="Saisir votre email"
                    onChangeText={email => setEmail(email)}
                />
              </Animatable.View>

              <Animatable.View
                animation='bounceInRight'
                duration={1500}
              >
                <TextInput 
                    style={styles.input}
                    maxLength={15}
                    secureTextEntry={true}
                    placeholder="Saisir votre mot de passe"
                    onChangeText={password => setPassword(password)}
                />
              </Animatable.View>


              <Animatable.View
                animation='bounceInRight'
                duration={1500}
              >
                  <View style={{margin: 10}}>
                      <PassMeter
                          showLabels
                          password={password}
                          maxLength={MAX_LEN}
                          minLength={MIN_LEN}
                          labels={PASS_LABELS}
                      />
                  </View>
                </Animatable.View>

                <Animatable.View
                  animation='bounceInRight'
                  duration={1500}
                >
                  <TouchableOpacity
                      style={styles.botao}
                      activeOpacity = { 0.75 } // number
                      onPress={handleLogin}
                  >
                      <Text style={styles.botaoText}>VALIDER</Text>
                  </TouchableOpacity>
                </Animatable.View>

                {/* <View style={{marginTop: 15, marginEnd: 25, alignSelf: 'flex-end'}}>
                    <Text style={styles.must} onPress={() => navigation.navigate('HomeApp')}>Continuer sans s'inscrire</Text>
                </View> */}


              <Animatable.View
                animation='bounceInRight'
                duration={1500}
              >
                <View style={{      
                        width: '100%', 
                        height: 90, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginTop: 20,
                        bottom: 1
                      }}
                >
                    <Text style={styles.vert} onPress={() => navigation.navigate('Register')}>Créer un nouveau compte</Text>
                </View>
              </Animatable.View>
                
        </ImageBackground>
      </SafeAreaView>
    )
}

  // backgroundColor: "#ff6347"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 325,
    height: 40,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 8
  },
  botao: {
    width: 325,
    height: 42,
    backgroundColor: "#9400d3",
    marginTop: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  must: {
    fontSize: 15,
    color: 'white'
  },
  vert: {
    color: 'white',
    fontSize: 15
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
},
error: {
    color: '#e9446a',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
},
})

export default LoginScreen