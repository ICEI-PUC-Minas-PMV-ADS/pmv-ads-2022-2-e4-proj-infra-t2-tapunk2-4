import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from '../contexts/UserContext';
import Main from '../Navigations/Main';

const Foto = () =>{
  
    return (
    <UserProvider>
      <NavigationContainer>
        <Main />
       
      </NavigationContainer>
    </UserProvider>
    );
  };

export default Foto;

/*Realizado import UserProvider e inserido no retorn*/