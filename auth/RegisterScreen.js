import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import PassMeter from 'react-native-passmeter'
import * as firebase from 'firebase'
import TouchableScale from 'react-native-touchable-scale'

const MAX_LEN = 15, MIN_LEN = 6, PASS_LABELS = ["Trop court", "Faible", "Normal", "Fort", "Sécurité maximale"]

function RegisterScreen({navigation}) {

  const [email, setEmail] = useState("")
  console.log(email)

  const [name, setName] = useState("")
  console.log(name)

  const [password, setPassword] = useState("")
  console.log(password)

  const [errorMessage, setErrorMessage] = useState(null)

  const handleSignUp = () => {
        
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: name
            })
        })
        .catch(error => setErrorMessage(error.message))
}

    return (
      <SafeAreaView style={{ flex: 1}}>
        <ImageBackground style={styles.container} source={require('../assets/fond2.png')} >

          <KeyboardAvoidingView>
            <Image 
                style={{width: 150, height: 150, top: 1, marginTop: 50}}
                source={require('../assets/logo1.png')}
            />
          </KeyboardAvoidingView>
                

                <View style={styles.errorMessage}>
                      <Text style={{textAlign: 'center'}}>{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}</Text>
                </View>

                <Text style={styles.must}>S'inscrire</Text>
                
                <TextInput 
                    style={styles.input}
                    placeholder="Saisir votre email"
                    onChangeText={email => setEmail(email)}
                    value={email}
                />

                <TextInput 
                    style={styles.input}
                    maxLength={15}
                    placeholder="Saisir votre nom"
                    onChangeText={name => setName(name)}
                    value={name}
                />

                <TextInput 
                    style={styles.input}
                    maxLength={15}
                    secureTextEntry={true}
                    placeholder="Saisir votre mot de passe"
                    onChangeText={password => setPassword(password)}
                    value={password}
                />

                <View style={{margin: 10}}>
                <PassMeter
                    showLabels
                    password={password}
                    maxLength={MAX_LEN}
                    minLength={MIN_LEN}
                    labels={PASS_LABELS}
                />
                </View>

                <TouchableScale
                    style={styles.botao}
                    activeOpacity = { 0.75 } // number
                    activeScale={0.9}
                    onPress={handleSignUp}
                >
                    <Text style={styles.botaoText}>VALIDER</Text>
                </TouchableScale>

                {/* <View style={{marginTop: 15, marginEnd: 25, alignSelf: 'flex-end'}}>
                    <Text style={styles.must} onPress={() => navigation.navigate('HomeApp')}>Continuer sans s'inscrire</Text>
                </View> */}

                <View style={{      
                        width: '100%', 
                        height: 160, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        
                        bottom: 10}}>
                    <Text style={styles.vert} onPress={() => navigation.navigate('Login')}>Vous avez déjà un compte</Text>
                </View>


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
      justifyContent: 'center',
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
      marginTop: 5,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ffff'
     
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
  }
  });

export default RegisterScreen