import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from '../components/Feed';
import Usuario from '../components/Usuario';
import PostDetallado from '../components/PostDetallado';

console.log("Feed:", Feed);
console.log("Usuario:", Usuario);
console.log("Detalle:", PostDetallado);

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  return (

    <Stack.Navigator

      initialRouteName="Feed"

      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'rgb(0,0,59)',
        },
      }}

    >

      <Stack.Screen
  name="Feed"
  component={() => (
    <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Text>Hola</Text>
    </View>
  )}
/>

      <Stack.Screen
        name="Detalle"
        component={PostDetallado}
      />

      <Stack.Screen
        name="Perfil"
        component={Usuario}
      />

    </Stack.Navigator>

  );

}