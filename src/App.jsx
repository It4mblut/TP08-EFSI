import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Usuario from './components/Usuario.jsx';
import PostDetallado from './components/PostDetallado.jsx';

function App() {
  const [vistaActual, setVistaActual] = useState('feed');
  const [postSeleccionado, setPostSeleccionado] = useState(null);

  function abrirPost(post) {
    setPostSeleccionado(post);
    setVistaActual('post');
  }

  function volverAlFeed() {
    setPostSeleccionado(null);
    setVistaActual('feed');
  }

  return (
    <SafeAreaView style={styles.appContenedor}>
      {/* Cabecera superior fija */}
      <Header />
      
      <View style={styles.appBody}>
        {/* Barra lateral / Menú */}
        <Sidebar setVistaActual={setVistaActual} />
        
        {/* Contenido Principal */}
        <View style={styles.appMain}>
          {vistaActual === 'feed' && (
            <Feed abrirPost={abrirPost} />
          )}
          {vistaActual === 'usuario' && (
            <Usuario />
          )}
          {vistaActual === 'post' && postSeleccionado && (
            <PostDetallado post={postSeleccionado} onVolver={volverAlFeed} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContenedor: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 59)',
  },
  appBody: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 60,
  },
  appMain: {
    flex: 1,
    padding: 10, 
    marginLeft: 250,
  },
});

export default App;