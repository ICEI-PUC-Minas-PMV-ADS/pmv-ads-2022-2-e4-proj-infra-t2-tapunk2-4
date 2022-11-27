import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import UserProvider from './src/Contexts/UserContext';
import  Main from './src/Navigations/Main';
import Route from './src/Navigations/Route';

const App = () =>{
  
    return (
    <UserProvider>
      <NavigationContainer>
      <StatusBar backgroundColor="#343a40" barStyle= "linght-content"/>
              <Main/>
      </NavigationContainer>
    </UserProvider>
    );
  };

export default App;

