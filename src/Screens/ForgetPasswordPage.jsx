import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../Component/ComponentInput/CustomInput'
import CustomButton from '../Component/ComponentButton/CustomButton'
const ForgetPasswordPage = ({navigation}) => {
    const [UserName, setUserName ] = useState('')

    const send = () => {
      navigation.navigate('NewPassword')
    }
    const BackTosignin = () => {
        navigation.navigate('SignIn')
    }
    
  return (
    <ScrollView style={{backgroundColor : 'white'}}  showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.HeaderStyle}>Reset your Password</Text>
            <CustomInput placholder='UserName' Value={UserName} setValue={setUserName} />

            <CustomButton text={'Send'}
              onPress={send} 
              type="PRIMARY"
              />

            <CustomButton text={'Back to Sign in'}
              onPress={BackTosignin} 
              type="TERTIARY"
              />

        </View>
    </ScrollView>
  )
}

export default ForgetPasswordPage

const styles = StyleSheet.create({
    container : {
        alignItems :'center',
        padding : 25,
        backgroundColor :'#FFFFFF'
    },
    HeaderStyle : {
        fontSize : 23,
        color : '#1919FF',
        fontWeight  :'bold',
        marginBottom : 10
    }
})