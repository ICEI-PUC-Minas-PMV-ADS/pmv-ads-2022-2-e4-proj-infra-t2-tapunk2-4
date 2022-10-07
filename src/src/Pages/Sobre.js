import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Constants from 'expo-constants';
import {Appbar, Card} from 'react-native-paper';

export default function Sobre(){
  return(
        
        <ScrollView>    
        
        
        <Appbar.Header> 
        
        <Appbar.Content title= "Mov Airsoft"/>
             
        </Appbar.Header>
        <Text style={styles.paragraph}>O que é Airsoft?</Text>
        </ScrollView>
        
  );
}

const styles = StyleSheet.create({
  
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});