import React, { StrictMode } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import App from './App.jsx';

function Main() {
  return (
    <StrictMode>
      
      <View style={styles.body}>
      
        <StatusBar barStyle="light-content" backgroundColor="#1d2146" />
        <App />
      </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1d2146',
  },
});

registerRootComponent(Main);