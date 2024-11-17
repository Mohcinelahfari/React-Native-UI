import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/Image/logopage.jpeg'
import CustomInput from '../Component/ComponentInput/CustomInput'

import ButtonChar from '../Component/UseButton/ButtonChar'
import CustomButton from '../Component/ComponentButton/CustomButton'
const LoginPage = ({ navigation }) => {
    const [name, setName ] = useState('')
    const [password, setPassword] = useState('')
    const Register = () => {
        // console.warn('Sign in')
        navigation.navigate('HomePage')
    }
    const onForgetPassword = () => {
        navigation.navigate('ForgetPassword')
    }
    const CreateAccount = () => {
        navigation.navigate('SignUp')
    }
    
  return (
    <ScrollView style={{backgroundColor : 'white'}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} resizeMode='contain' />
            <CustomInput placholder='UserName' Value={name} setValue={setName} />
            <CustomInput placholder='Password' Value={password}
             setValue={setPassword}
             secureTextEntry
             />
            <CustomButton text={'Register'}
              onPress={Register} 
              type="PRIMARY"
              />
            <CustomButton text={'Foget Password ?'}
             onPress={onForgetPassword}
              type="TERTIARY"
              
              />
            <ButtonChar />
            <CustomButton text={'Dont Have an Account ? create one'}
             onPress={CreateAccount}
              type="TERTIARY"
              
              />
        </View>
    </ScrollView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    container : {
        alignItems :'center',
        padding : 25,
        backgroundColor :'white'
    },
    logo : {
        width :100,
        height :100,
        maxWidth : 200,
        maxHeight:300,
        marginBottom : 25
    }
})