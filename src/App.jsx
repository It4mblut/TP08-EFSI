import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
// import StackNavigator from './navigation/StackNavigator.jsx';
import Feed from './components/Feed.jsx';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.appContenedor}>
          <Header />
          <View style={styles.appBody}>
            <Sidebar />
            <View style={styles.appMain}>

<Feed />
            </View>
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContenedor: { flex: 1, backgroundColor: '#1d2146' },
  appBody: { flex: 1, flexDirection: 'row' },
  appMain: { flex: 1, marginLeft: 250, marginTop: 60, paddingBottom: 20 },
});