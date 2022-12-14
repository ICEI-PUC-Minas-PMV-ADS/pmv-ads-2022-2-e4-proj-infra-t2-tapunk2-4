import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Container from '../componentes/Container';
import Body from '../componentes/body'

export default function Apresentacao({ navigation }) {
  return (
    <Container>
      <Body>
        <Animatable.Image
          animation="flipInY"
          source={require('../assents/mov1.png')}
          style={{ width: '60%' }}
          resizeMode="contain"
        />
      </Body>
      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text style={styles.title}>Conheça a MovAirsof!</Text>
        <Text style={styles.text}>Clique em Acessar para começar!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PaginaInicial')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Container>
  );
}
const styles = StyleSheet.create({  
  containerForm: {
    flex: 1,
    backgroundColor: '#696969',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingStart: '5%',
    parddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 3,
  },
  text: {
    color: '#a1a1a1',
  },

  button: {
    position: 'absolute',
    backgroundColor: '#f0870c',
    borderRadius: 50,
    paddingVertical: 5,
    width: '80%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
