import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({placholder, Value, setValue, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placholder} 
      value={Value}
       onChangeText={setValue}
       style={styles.input}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFFFFF',
        width : '100%',
        padding : 5,
        
    },
    input : {
        borderWidth : 1,
        borderColor : '#9f9a9a',
        borderRadius : 5,
        paddingHorizontal : 15,
        fontSize : 16,
        height : 40,
        color :"#000"
    }
})