import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/Image/logopage.jpeg'
import CustomInput from '../Component/ComponentInput/CustomInput'
import ButtonChar from '../Component/UseButton/ButtonChar'
import CustomButton from '../Component/ComponentButton/CustomButton'
const CreateAccountPage = ({ navigation }) => {
    const [name, setName ] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] =useState('')
    const [RepeatPassword, setRepeatPassword] = useState('')
    const OnRegister = () => {
        navigation.navigate('ConfirmationEmail')
    }
    const teamsOfUser = () => {
        console.warn('teamsOfUser')
    }
    const PrivatePolicy = () => {
        console.warn('PrivatePolicy')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
  return (
    <ScrollView style={{backgroundColor : 'white'}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.textHeader}>Create an Account</Text>
            <CustomInput placholder='UserName' Value={name} setValue={setName} />
            <CustomInput placholder='Email' Value={email} setValue={setEmail} />
            <CustomInput placholder='Password' Value={password}
             setValue={setPassword}
             secureTextEntry
             />
             <CustomInput
                placholder='Repeat Password'
                Value={RepeatPassword}
                setValue={setRepeatPassword}
                secureTextEntry
             />
            <CustomButton text={'Register'}
              onPress={OnRegister} 
              type="PRIMARY"
              />
              <Text style={styles.accept}>By register you confirm that you accept our <Text style={styles.orangecolor} onPress={teamsOfUser}>Terms of{' '}</Text>
                and {' '}<Text  style={styles.orangecolor} onPress={PrivatePolicy}>Privaty Policy</Text>
              </Text>
              
             <ButtonChar />
             <Text onPress={onSignInPress} style={styles.createAccount}>Have an Account ? Sign in</Text>
        </View>
    </ScrollView>
  )
}

export default CreateAccountPage

const styles = StyleSheet.create({
    container : {
        alignItems :'center',
        padding : 25,
        backgroundColor :'#FFFFFF'
    },
    textHeader :{
        fontSize : 23,
        color : '#1919FF'
    },
    accept : {
        fontSize : 14,
        color : '#bebebe',
        width : '100%',
        marginTop : 5
    },
    orangecolor : {
        color : 'orange'
    },
    createAccount : {
        marginTop : 15,
        color : '#000'
    }
})