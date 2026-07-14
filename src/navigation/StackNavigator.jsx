import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../components/Feed';
import PostDetallado from '../components/PostDetallado';
import Usuario from '../components/Usuario';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Desactivamos el header nativo gris porque ya tenés tu propio <Header /> personalizado
        animation: 'fade'   // Transición suave entre pantallas
      }}
    >
      <Stack.Screen name="Home" component={Feed} />
      <Stack.Screen name="Detalle" component={PostDetallado} />
      <Stack.Screen name="Perfil" component={Usuario} />
    </Stack.Navigator>
  );
}