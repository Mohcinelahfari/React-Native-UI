import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './src/Screens/LoginPage'
import CreateAccountPage from './src/Screens/CreateAccountPage'
import ConfirmEmailPage from './src/Screens/ConfirmEmailPage'
import ForgetPasswordPage from './src/Screens/ForgetPasswordPage'
import NewPasswordPage from './src/Screens/NewPasswordPage'
import Navigation from './src/Navigation/Navigation'

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  root:{
    flex :1,
    backgroundColor : 'white'
  }
})