/*import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Register from './Register';
import ListaEventos from './ListaEventos';
import Fotos from './Foto';
import Sobre from './Sobre';


const Acesso = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'login',
      title: 'Login',
      icon: 'account',
      unfocusedIcon: 'account',
      color: '#f0870c',
    },
    {
      key: 'register',
      title: 'Register',
      icon: 'account-box',
      unfocusedIcon: 'account',
      color: '#f0870c',
    },
    {
      key: 'listaEventos',
      title: 'Lista de Eventos',
      icon: 'clipboard-list',
      unfocusedIcon: 'clipboard-list',
      color: '#f0870c',
    },
    {
      key: 'fotos',
      title: 'Fotos',
      icon: 'picture-in-picture-bottom-right',
      unfocusedIcon: 'picture-in-picture-bottom-right',
      color: '#f0870c',
    },
    {
      key: 'sobre',
      title: 'Sobre',
      icon: 'account-eye',
      unfocusedIcon: 'account-ey',
      color: '#f0870c',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: Login,
    register: Register,
    listaEventos: ListaEventos,
    fotos: Fotos,
    sobre: Sobre,
    });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Acesso;
*/