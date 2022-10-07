import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Apresentacao from '../Pages/Apresentacao';
import PaginaInicial from '../Pages/PaginaInicial';

const Stack = createNativeStackNavigator();


const Main = () => {

    return (
        <Stack.Navigator initialRouteName="Apresentacao">
            <Stack.Screen name="Apresentacao" component={Apresentacao} />
            <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
        </Stack.Navigator>
    );
}

export default Main