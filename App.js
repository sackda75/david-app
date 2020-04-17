import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './tab/HomeScreen'
import HomeScreenDetail from './tab/HomeScreenDetail'

import JobsScreen from './tab/JobsScreen'
import JobsScreenDetail from './tab/JobsScreenDetail'

import FormationsScreen from './tab/FormationsScreen'
import FormationsScreenDetail from './tab/FormationsScreenDetail'

import InformationsScreen from './tab/InformationsScreen'
import InformationsScreenDetail from './tab/InformationsScreenDetail'

import CustomDrawerContent from './CustomDrawerContent'
import AboutmeScreen from './drawer/AboutmeScreen'
import DocumentsScreen from './drawer/DocumentsScreen'
import MecontacterScreen from './drawer/MecontacterScreen'

import LoginScreen from './auth/LoginScreen'
import RegisterScreen from './auth/RegisterScreen'




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

const StackJob = createStackNavigator()
function JobStack() {
    return (
      <StackJob.Navigator initialRouteName='Jobs' headerMode='none'>
          <StackJob.Screen  name='Jobs' component={JobsScreen} options={navOptionHandler}/>
          <StackJob.Screen name='JobsDetail' component={JobsScreenDetail} options={navOptionHandler}/>
      </StackJob.Navigator>
    )
}


const StackFormation = createStackNavigator()
function FormationStack() {
  return (
    <StackFormation.Navigator initialRouteName='Formations' headerMode='none'>
        <StackFormation.Screen name='Formations' component={FormationsScreen} options={navOptionHandler}/>
        <StackFormation.Screen name='FormationsDetail' component={FormationsScreenDetail} options={navOptionHandler}/>
    </StackFormation.Navigator>
  )
}

const StackInformation = createStackNavigator()
function InformationsStack() {
  return (
    <StackInformation.Navigator initialRouteName='Informations' headerMode='none'>
        <StackInformation.Screen name='Informations' component={InformationsScreen} options={navOptionHandler}/>
        <StackInformation.Screen name='InformationsDetail' component={InformationsScreenDetail} options={navOptionHandler}/>
    </StackInformation.Navigator>
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
                    } else if (route.name === 'Jobs') {
                      iconName = focused 
                        ? 'keyboard' 
                        : 'keyboard-outline';
                    } else if (route.name === 'Formations') {
                      iconName = focused 
                        ? 'script' 
                        : 'script-outline';
                    } else if (route.name === 'Informations') {
                      iconName = focused 
                        ? 'magnify' 
                        : 'magnify-plus-outline';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                  },
              })}
              tabBarOptions={{
                  activeTintColor: '#9400d3',
                  inactiveTintColor: 'black',
              }}
              >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Jobs" component={JobStack} />
                <Tab.Screen name="Formations" component={FormationStack} />
                <Tab.Screen name="Informations" component={InformationsStack} />
        </Tab.Navigator>
  )
}



const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Accueil" drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Accueil" component={TabNavigator} />
        <Drawer.Screen name="Aboutme" component={AboutmeScreen} />
        <Drawer.Screen name="Documents" component={DocumentsScreen} />
        <Drawer.Screen name="Mecontacter" component={MecontacterScreen} />
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