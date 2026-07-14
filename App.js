import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const [mail, setMail] = React.useState('');
  const [contraseña, setContraseña] = React.useState('');
  const [mensaje, setMensaje] = React.useState('');
  const [estadoIngreso, setEstadoIngreso] = React.useState(false);

  const login = () => {
    const usuarioCorrecto = 'pepe@gmail.com';
    const claveCorrecta = 'contraseñaDePepe';

    if (mail === usuarioCorrecto && contraseña === claveCorrecta) {
      setMensaje('¡Ingreso exitoso! Bienvenido.');
      setEstadoIngreso(true);
    } else {
      setMensaje('Usuario o contraseña incorrectos, vuelva a intentar');
      setEstadoIngreso(false);
    }
  };
//AAAAAAAAAAA NO COMMITEAAA
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2D54BE" />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Primer TP React Native</Text>
        </View>

        <View style={styles.content}>

          <Image
            source={{ uri: 'https://wikimedia.org' }}
            style={styles.logo}
            resizeMode="contain"
          />

          <TextInput
            style={styles.input}
            placeholder="Ingresar mail"
            placeholderTextColor="#555555"
            value={mail}
            onChangeText={setMail}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Ingresar contraseña"
            placeholderTextColor="#555555"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry={true}
          />

          {mensaje ? (
            <Text style={[styles.mensajeText, estadoIngreso ? styles.exito : styles.error]}>
              {mensaje}
            </Text>
          ) : null}

          <View style={styles.buttonContainer}>
            <Button
              title="INGRESAR"
              onPress={login}
              color="#2D54BE"
            />
          </View>

          <View style={styles.linkContainer}>
            <Button
              title="¿Olvidaste la clave?"
              onPress={() => { }}
              color="#000000"
            />
          </View>

          <View style={styles.linkContainer}>
            <Button
              title="Crear Cuenta"
              onPress={() => { }}
              color="#000000"
            />
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2D54BE',
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '4%',
  },
  logo: {
    width: '80%',
    height: 100,
    marginBottom: '4%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#2D54BE',
    borderWidth: 1.5,
    paddingHorizontal: '4%',
    marginBottom: '2%',
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
    width: '100%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  linkContainer: {
    width: '100%',
    marginVertical: '0.5%',
  },
  mensajeText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: '1.5%',
    fontWeight: '500',
  },
  error: {
    color: '#D32F2F',
  },
  exito: {
    color: '#388E3C',
  },
});

export default App()
