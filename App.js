import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './tab/HomeScreen'
import HomeScreenDetail from './tab/HomeScreenDetail'
import SettingsScreen from './tab/SettingsScreen'
import SettingsScreenDetail from './tab/SettingsScreenDetail'
import NotificationsScreen from './drawer/NotificationsScreen'
import LoginScreen from './auth/LoginScreen'
import RegisterScreen from './auth/RegisterScreen'
import CustomDrawerContent from './CustomDrawerContent'



const navOptionHandler = () => ({
    hearderShown: false
})



const StackHome = createStackNavigator()
function HomeStack() {
    return (
      <StackHome.Navigator initialRouteName='Home' headerMode='none'>
          <StackHome.Screen  name='Home' component={HomeScreen} options={navOptionHandler}/>
          <StackHome.Screen name='HomeDetail' component={HomeScreenDetail} options={navOptionHandler}/>
      </StackHome.Navigator>
    )
}



const StackSetting = createStackNavigator()
function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName='Settings' headerMode='none'>
        <StackSetting.Screen name='Settings' component={SettingsScreen} options={navOptionHandler}/>
        <StackSetting.Screen name='SettingsDetail' component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}



const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
        <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'Settings') {
                      iconName = focused 
                        ? 'settings' 
                        : 'settings-outline';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                  },
              })}
              tabBarOptions={{
                  activeTintColor: 'red',
                  inactiveTintColor: 'black',
              }}
              >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingStack} />
        </Tab.Navigator>
  )
}



const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}



const StackApp = createStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Login' headerMode='none'>
        <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandler}/>
        <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  )
}

export default App