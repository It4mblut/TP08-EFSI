import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

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
      { id: '1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-f7XnOLNFue0Wwv9NUtYFRjCcLnQGms1sQ&s' },
      { id: '2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1llGEli9aS7wm7s4Wl1l-jmidoZ-08bMrg&s' },
      { id: '3', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhLfdHxkRbS03FmtbNmX_RB2Zdlq_uHrqxw&s' }
    ]
  };

  const renderHeader = () => (
    <View style={styles.usuarioHeader}>
      <Image source={{ uri: usuario.foto }} style={styles.perfilImg} />
      <View style={styles.headerInfo}>
        <Text style={styles.nombreText}>{usuario.nombre}</Text>
        <Text style={styles.usernameText}>{usuario.username}</Text>
        
        <View style={styles.usuarioMetrics}>
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
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={usuario.galeria}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ListHeaderComponent={renderHeader}
        columnWrapperStyle={styles.galleryRow}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.galeriaImg} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  usuarioHeader: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 30 },
  perfilImg: { width: 90, height: 90, borderRadius: 45 },
  headerInfo: { flex: 1, gap: 4 },
  nombreText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  usernameText: { color: 'gray', fontSize: 14 },
  usuarioMetrics: { flexDirection: 'column', gap: 2, marginVertical: 6 },
  infoText: { color: 'white', fontSize: 13 },
  bioText: { color: 'white', fontSize: 14, marginBottom: 6 },
  editarBtn: { paddingVertical: 6, paddingHorizontal: 12, borderWidth: 1, borderColor: 'gray', borderRadius: 8, alignSelf: 'flex-start' },
  editarBtnText: { color: 'white', fontSize: 13 },
  galleryRow: { justifyContent: 'flex-start', gap: 6, marginBottom: 6 },
  galeriaImg: { width: '32%', aspectRatio: 1, borderRadius: 4 }
});

export default Usuario;