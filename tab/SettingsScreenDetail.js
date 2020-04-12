import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import CustomHeader from '../CustomHeader'

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <CustomHeader title='Setting Detail à côté du menu' navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>SettingsScreenDetail Milieu</Text>
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreenDetail