import React, { useState } from 'react';
import { View, Text, StyleSheet , Image , TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';

export default function Apresentacao({ navigation }) {
  
  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}> 
      <Animatable.Image
      animation= "flipInY"
      source={require('../assets/logo-114x114.png')}
      style={{width:'100%'}}
      resizeMode="contain"
      />
      </View>

      <Animatable.View delay={600} animation="fadeInUp"style= {styles.containerForm}> 
        <Text style={styles.title}>Conheça a MovAirsoft!</Text>
        <Text style={styles.text}>Faça o login para começar!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar </Text>
        </TouchableOpacity>

      </Animatable.View>

    </View> 
  );
}
const styles = StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: '#f0870c'
   },
   containerLogo:{
        flex: 2,
        backgroundColor: '#f0870c',
        justifyContent: 'center',
        alignItems: 'center',

   },
   containerForm:{
        flex: 1,
        backgroundColor: '#343A40',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingStart:'5%',
        parddingEnd: '5%'
   },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginBottom: 1,
    },
    text:{
      color:'#a1a1a1'
    },
    
    button:{
      position: 'absolute',
      backgroundColor:'#f0870c',
      borderRadius:50,
      paddingVertical:8,
      width:'60%',
      alignSelf: 'center',
      bottom:'15%',
      alignItems: "center",
      justifyContent: 'center',

    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',

    }
    
})
