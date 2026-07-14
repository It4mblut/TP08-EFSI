import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

function Usuario() {
  const usuario = {
    nombre: 'Juan López',
    username: '@juancito.loPz',
    bio: 'Solo alguien que ama a los gatos',
    publicaciones: 24,
    seguidores: 1300,
    seguidos: 430,
    foto: 'https://fotografias-atreseries.atresmedia.com/clipping/cmsimages02/2018/06/06/54229044-BF06-42B7-A62E-AC06B1348713/70.jpg?crop=1574,885,x0,y42&width=480&height=270&optimize=high&format=webply',
    galeria: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-f7XnOLNFue0Wwv9NUtYFRjCcLnQGms1sQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1llGEli9aS7wm7s4Wl1l-jmidoZ-08bMrg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhLfdHxkRbS03FmtbNmX_RB2Zdlq_uHrqxw&s',
    ]
  };

  return (
    <ScrollView style={styles.usuario}>
        
      <View style={styles.usuarioHeader}>
        <Image source={{ uri: usuario.foto }} style={styles.perfilImg} />
        
        <View style={styles.headerInfo}>
          <Text style={styles.nombreText}>{usuario.nombre}</Text>
          <Text style={styles.usernameText}>{usuario.username}</Text>
          
          <View style={styles.usuarioInfo}>
            <Text style={styles.infoText}>{usuario.publicaciones} publicaciones</Text>
            <Text style={styles.infoText}>{usuario.seguidores} seguidores</Text>
            <Text style={styles.infoText}>{usuario.seguidos} seguidos</Text>
          </View>
          
          <Text style={styles.bioText}>{usuario.bio}</Text>
          
          <TouchableOpacity style={styles.editarBtn}>
            <Text style={styles.editarBtnText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      <View style={styles.usuarioPublicaciones}>
        {usuario.galeria.map((url, i) => (
          <Image key={i} source={{ uri: url }} style={styles.galeriaImg} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  usuario: {
    flex: 1,
    padding: 20,
  },
  usuarioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, 
    marginBottom: 20,
  },
  perfilImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerInfo: {
    flex: 1,
    gap: 4,
  },
  nombreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  usernameText: {
    color: 'gray',
    fontSize: 14,
  },
  usuarioInfo: {
    flexDirection: 'column',
    gap: 4,
    marginVertical: 6,
  },
  infoText: {
    color: 'white',
    fontSize: 13,
  },
  bioText: {
    color: 'white',
    fontSize: 14,
  },
  editarBtnText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  usuarioPublicaciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 15,
  },
  galeriaImg: {
    width: '31%', 
    height: 120,
    borderRadius: 4,
  },
});

export default Usuario;