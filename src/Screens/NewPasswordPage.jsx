import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../Component/ComponentInput/CustomInput'

import CustomButton from '../Component/ComponentButton/CustomButton'
const NewPasswordPage = ({navigation}) => {
    const [code, setcode ] = useState('')
    const [Newpassword,setNewpassword] = useState('')
    const Submit = () => {
        navigation.navigate('HomePage')
    }
    const BackTosignin = () => {
        navigation.navigate('SignIn')
    }
    
  return (
    <ScrollView style={{backgroundColor : 'white'}}  showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.HeaderStyle}>Reset your Password</Text>
            <CustomInput placholder='Confirm code' Value={code} setValue={setcode} />
            <CustomInput placholder='Enter New password' Value={Newpassword}
             setValue={setNewpassword}
             secureTextEntry
             />
            <CustomButton text={'Submit'}
              onPress={Submit} 
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

export default NewPasswordPage

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