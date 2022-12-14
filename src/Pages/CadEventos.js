import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import { insertCadEvento } from '../services/eventoService';

const CadEventos = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [modalidade, setModalidade] = useState('');
  const [dataEvento, setDataevento] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (item) {
      setModalidade(item.modalidade);
      setDataevento(item.dataEvento);
      setDescricao(item.descricao);
    }
  }, [item]);

  const handleRegCadastro = () => {
    insertCadEvento({
      modalidade: modalidade,
      dataEvento: dataEvento,
      descricao: descricao,
    }).then((res) => {
      console.log(res);
      navigation.goBack();

      if (res) {
        Alert.alert('Parabéns!', 'Evento cadastrado com sucesso!', [
          { test: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert(
          'Atençao',
          'Evento não cadastrado!Tente novamente mais tarde :)'
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}> Cadastre seu Evento!</Text>
      </Animatable.View>

      <ScrollView style={styles.scrollView}>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}> Modalidade: </Text>
          <TextInput
            style={styles.input}
            label="Modalidade:"
            value={modalidade}
            onChangeText={(text) => setModalidade(text)}
            keyboardType="modalidade-address"
          />

          <Text style={styles.title}> Data : </Text>
          <TextInput
            style={styles.input}
            label="Data:"
            value={dataEvento}
            onChangeText={(text) => setDataevento(text)}
            keyboardType="numeric"
          />

          <Text style={styles.title}> Descrição: </Text>
          <TextInput
            style={styles.input}
            label="Descricao:"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            keyboardType="descricao-address"
          />

          <TouchableOpacity style={styles.buttonCadastrar}>
            <Text
              style={styles.buttonTextCadastrar}
              onPress={handleRegCadastro}>
              Cadastrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCancelar}>
            <Text
              style={styles.buttonTextCancelar}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Cancelar{' '}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0870c',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '3%',
    paddingEnd: '3%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 30,
    marginBottom: 12,
    fontSize: 25,
  },
  buttonCadastrar: {
    backgroundColor: '#f0870c',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancelar: {
    backgroundColor: '#f0870c',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextCadastrar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextCancelar: {
    color: '#343a40',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: '#f0870c',
    marginHorizontal: 10,
  },
});

export default CadEventos;
