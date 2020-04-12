import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import CustomHeader from '../CustomHeader'

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <CustomHeader title='Notifications à côte du menu' navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notifications Milieu</Text>
      </View>
    </SafeAreaView>
  )
}

export default NotificationsScreen