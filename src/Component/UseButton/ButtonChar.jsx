import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../ComponentButton/CustomButton'


const ButtonChar = () => {
    const onPress = () => {
        console.warn('Sign in')
    }
    const onForgetPassword = () => {
        console.warn('forget password')
    }
  return (
    <>



            <CustomButton text={'Sign In with Facebook'}
              onPress={onPress} 
              type="PRIMARY"
                bgColor='#E7EAF4'
                fgColor='#4765A9'
              />
            <CustomButton text={'Sign In with Google'}
              onPress={onPress} 
              type="PRIMARY"
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
              />
            <CustomButton text={'Sign In Apple'}
              onPress={onPress} 
              type="PRIMARY"
                bgColor='#e3e3e3'
                fgColor='#363636'
              />
    </>
  )
}

export default ButtonChar

const styles = StyleSheet.create({})