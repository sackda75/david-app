import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'

const LoadingScreen = ({navigation}) => {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
    
            navigation.navigate(user ? "HomeApp" : "Login")
        })
      }, [])
    


    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" color="#e9446a"></ActivityIndicator>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoadingScreen
