import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apresentacao from '../Pages/Apresentacao';
import PaginaInicial from '../Pages/PaginaInicial';
import Sobre from '../Pages/Sobre';
import Foto from '../Pages/Foto';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import EditarCadastro from '../Pages/EditarCadastro';
import ListaEventos from '../Pages/ListaEventos';

const Stack = createNativeStackNavigator();

const Main = () => {

      return(

        <Stack.Navigator initialRouteName="Apresentação">
            <Stack.Screen name="Apresentação" component={Apresentacao} options={{headerShown: false}}/> 
            <Stack.Screen name="Pagina Inicial" component={PaginaInicial} options={{headerShown: false}}/>
            <Stack.Screen name="Sobre" component={Sobre} options={{headerShown: false}}/>
            <Stack.Screen name="Foto" component={Foto} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
            <Stack.Screen name="Editar Cadastro" component={EditarCadastro} options={{headerShown: false}}/>
            <Stack.Screen name="Lista Eventos" component={ListaEventos} options={{headerShown: false}}/>         
        </Stack.Navigator>

    )
}    
export default Main;