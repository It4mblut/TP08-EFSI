import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import StackNavigator from './navigation/StackNavigator';
import { navigationRef } from './navigation/RootNavigation';

export default function App() {

  return (

    <SafeAreaProvider>

      <NavigationContainer ref={navigationRef}>

<SafeAreaView style={styles.appContenedor}>

    <StatusBar style="light" />

    <View />

    <View style={styles.appBody}>

        <View />

        <View style={styles.appMain}>
            <View
  style={{
    flex: 1,
    backgroundColor: "red",
  }}
/>
        </View>

    </View>

</SafeAreaView>

      </NavigationContainer>

    </SafeAreaProvider>

  );

}

const styles = StyleSheet.create({

  appContenedor: {
    flex: 1,
    backgroundColor: 'rgb(0,0,59)',
  },

  appBody: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 60,
  },

  appMain: {
    flex: 1,
    marginLeft: 250,
    padding: 10,
  },

});