import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import { insertCadEquipe} from '../services/equipeService';

const CadEquipe = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [nome, setNome] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [jogadores, setJogadores] = useState('');

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setModalidade(item.modalidade);
      setDescricao(item.descricao);
      setJogadores(item.jogadores);
    }
  }, [item]);

  const handleRegEquipe= () => {
    insertCadEquipe({
      nome: nome,
      modalidade: modalidade,
      descricao: descricao,
      jogadores: jogadores,
    }).then((res) => {
      console.log(res);
      navigation.goBack();

      if (res) {
        Alert.alert('Atenção', 'Equipe cadastrado com sucesso!', [
          { test: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert(
          'Atençao',
          'Equipe não cadastrada!Tente novamente mais tarde :)'
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
        <Text style={styles.message}> Cadastre sua equipe!</Text>
      </Animatable.View>

      <ScrollView style={styles.scrollView}>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}> Nome: </Text>
          <TextInput
            style={styles.input}
            label="Nome:"
            value={nome}
            onChangeText={(text) => setNome(text)}
            keyboardType="nome-address"
          />
          <Text style={styles.title}> Modalidade: </Text>
          <TextInput
            style={styles.input}
            label="Modalidade:"
            value={modalidade}
            onChangeText={(text) => setModalidade(text)}
            keyboardType="modalidade-address"
          />

          <Text style={styles.title}> Descricao: </Text>
          <TextInput
            style={styles.input}
            label="Descrição:"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            keyboardType="descricao-address"
          />
          <Text style={styles.title}> Jogadores: </Text>
          <TextInput
            style={styles.input}
            label="Jogadores:"
            value={jogadores}
            onChangeText={(text) => setJogadores(text)}
            keyboardType="jogadores-address"
          />

          <TouchableOpacity style={styles.buttonCadastrar}>
            <Text style={styles.buttonTextCadastrar} onPress={handleRegEquipe} >Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCancelar}>
            <Text style={styles.buttonTextCancelar} onPress={()=>navigation.goBack()} > Cancelar </Text>
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
    fontSize: 10,
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

export default CadEquipe;
