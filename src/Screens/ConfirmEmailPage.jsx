import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../Component/ComponentInput/CustomInput'

import ButtonChar from '../Component/UseButton/ButtonChar'
import CustomButton from '../Component/ComponentButton/CustomButton'
const ConfirmEmailPage = ({navigation}) => {
    const [code, setcode ] = useState('')
    const [password, setPassword] = useState('')
    const confirmEmail = () => {
      navigation.navigate('HomePage')
    }
    const onResendPress = () => {
        console.warn('forget password')
    }
    const SignInPress = () => {
      navigation.navigate('SignIn')
    }
    
  return (
    <ScrollView style={{backgroundColor : 'white'}}  showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.HeaderStyle}>Confirm your Email</Text>
            <CustomInput placholder='Entre your confirmation code' Value={code} setValue={setcode} />

            <CustomButton text={'Confirm'}
              onPress={confirmEmail} 
              type="PRIMARY"
              />
            <CustomButton text={'Resend code'}
              onPress={onResendPress} 
              type="SECONDORY"
              />
            <CustomButton text={'Back to Sign in'}
              onPress={SignInPress} 
              type="TERTIARY"
              />

        </View>
    </ScrollView>
  )
}

export default ConfirmEmailPage

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