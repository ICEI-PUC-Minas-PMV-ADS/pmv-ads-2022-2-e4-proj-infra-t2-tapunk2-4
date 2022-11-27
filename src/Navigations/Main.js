import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apresentacao from '../Pages/Apresentacao';
import Login from '../Pages/Login';
import PaginaInicial from '../Pages/PaginaInicial';
import Cadastro from '../Pages/Cadastro';
import Sobre from '../Pages/Sobre';
import Foto from '../Pages/Foto';
import CadEquipe from '../Pages/CadEquipe';
import CadEventos from '../Pages/CadEventos';
import ListaEventos from '../Pages/ListaEventos';

const Stack = createNativeStackNavigator();

const Main = () => {

      return(
       

          <Stack.Navigator initialRouteName= "Lista Eventos">
            <Stack.Screen name= "Apresentação" component={Apresentacao} options={{headerShown: false}}/> 
            <Stack.Screen name= "PaginaInicial" component={PaginaInicial} options={{headerShown: false}}/>
            <Stack.Screen name= "Sobre" component={Sobre} options={{headerShown: false}}/>
            <Stack.Screen name= "Foto" component={Foto} options={{headerShown: false}}/>
            <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name= "Cadastro" component={Cadastro} options={{headerShown: false}}/>
            <Stack.Screen name= "Cadastro de Equipe" component = {CadEquipe} options={{headerShown: false}}/>
            <Stack.Screen name= "Cadastro de Evento" component = {CadEventos} options={{hearderShown: false}}/>
            <Stack.Screen name= "Lista Eventos" component={ListaEventos} options={{headerShown: false}}/>         
        </Stack.Navigator>      
        

    )
}    
export default Main;