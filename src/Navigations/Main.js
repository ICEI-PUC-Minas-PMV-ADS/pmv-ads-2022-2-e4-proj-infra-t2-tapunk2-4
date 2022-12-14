import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Apresentacao from '../Pages/Apresentacao';
import PaginaInicial from '../Pages/PaginaInicial';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Sobre from '../Pages/Sobre';
import Foto from '../Pages/Foto';
import CadEquipe from '../Pages/CadEquipe';
import CadEventos from '../Pages/CadEventos';
import ListaEventos from '../Pages/ListaEventos';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Apresentacao">
      <Stack.Screen name="Apresentacao" component={Apresentacao} options={{ headerShown: false }} />
      <Stack.Screen
        name="PaginaInicial"
        component={PaginaInicial}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Foto"
        component={Foto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro de Equipe"
        component={CadEquipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro de Evento"
        component={CadEventos}
        options={{ hearderShown: false }}
      />
      <Stack.Screen
        name="Lista Eventos"
        component={ListaEventos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Main;
