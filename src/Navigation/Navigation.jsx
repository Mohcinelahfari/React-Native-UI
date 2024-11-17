import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../Screens/LoginPage'
import CreateAccountPage from '../Screens/CreateAccountPage'
import ConfirmEmailPage from '../Screens/ConfirmEmailPage'
import ForgetPasswordPage from '../Screens/ForgetPasswordPage'
import NewPasswordPage from '../Screens/NewPasswordPage'
import HomePage from '../Screens/HomePage'

const Navigation = () => {
  const Satck = createStackNavigator()
  return (
    <NavigationContainer>
      <Satck.Navigator screenOptions={{headerShown : false}}>
        <Satck.Screen name='SignIn' component={LoginPage} />
        <Satck.Screen name='SignUp' component={CreateAccountPage} />
        <Satck.Screen name='ConfirmationEmail' component={ConfirmEmailPage} />
        <Satck.Screen name='ForgetPassword' component={ForgetPasswordPage} />
        <Satck.Screen  name='NewPassword' component={NewPasswordPage}/>
        <Satck.Screen name='HomePage' component={HomePage} />
      </Satck.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})