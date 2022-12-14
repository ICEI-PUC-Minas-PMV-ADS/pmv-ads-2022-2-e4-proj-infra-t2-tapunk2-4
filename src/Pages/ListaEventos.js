import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import { getCadEvento } from '../services/eventoService';
import Acesso from './Acesso';

const ListaEventos = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [listarEventos, setListarEventos] = useState([]);
  const { item } = route.params ? route.params : {};

  useEffect(() => {
    getCadEvento().then((dados) => {
      console.log(dados);
      setListarEventos(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={'Data: ' + item.dataEvento}
      text={'Modalidade: ' + item.modalidade}
      description={'Descrição: ' + item.descricao}
      left={(props) => (
        <List.Icon {...props} color={'black'} icon="account-details" />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.container}>

    <Button title= "Voltar" onPress={()=>navigation.navigate ('Cadastro de Evento')}/>

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}> Eventos Disponíveis! </Text>
      </Animatable.View>

      <ScrollView style={styles.scrollView}>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <FlatList
            data={listarEventos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f0870c',
    fontSize: 28,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '3%',
    paddingEnd: '3%',
  },
  scrollView: {
    backgroundColor: '#f0870c',
    marginHorizontal: 10,
  },
});

export default ListaEventos;
