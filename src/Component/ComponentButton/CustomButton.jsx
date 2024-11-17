import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,
    styles[`container_${type}`],
      bgColor ? {backgroundColor : bgColor} : {}
      
    ]}>
      <Text style={[styles.text,
         styles[`text_${type}`],
        fgColor ? {color : fgColor} : {}
         ]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container : {
    marginTop :10,
    width : '100%',
    padding : 10,
    paddingHorizontal : 15,
    alignItems : 'center',
    borderRadius : 5,

  },
  text :{
    textAlign : 'center',
    color : 'white',
    fontWeight : 'bold'
  },
  container_PRIMARY : {
    backgroundColor : '#3871F3',
  },
  container_TERTIARY:{

  },
  container_SECONDORY : {
    borderColor : '#3871F3',
    borderWidth : 2
  },
  text_SECONDORY : {
    color : '#3871F3'
  },
  text_TERTIARY : {
    color : 'gray'
  }
})