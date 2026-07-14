import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function Sidebar({ setVistaActual }) {
  return (
    <View style={styles.sidebar}>
      <TouchableOpacity 
        style={styles.sidebarPerfil} 
        onPress={() => setVistaActual('usuario')}
      >
        <Image 
          source={{ uri: "https://fotografias-atreseries.atresmedia.com/clipping/cmsimages02/2018/06/06/54229044-BF06-42B7-A62E-AC06B1348713/70.jpg?crop=1574,885,x0,y42&width=480&height=270&optimize=high&format=webply" }} 
          style={styles.sidebarFotoPerfil} 
        />
        <View style={styles.perfilTexto}>
          <Text style={styles.sidebarNombre}>Juan López</Text>
          <Text style={styles.sidebarArroba}>@juancito.loPz</Text>
        </View>

      </TouchableOpacity>
      <View style={styles.sidebarSeguidores}>
        <TouchableOpacity style={styles.seguidoresBtn} activeOpacity={1}>
          <Ionicons name="person-outline" size={16} color="white" />
          <Text style={styles.seguidoresText}>1.3K</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.seguidoresBtn} activeOpacity={1}>
          <Ionicons name="heart-outline" size={16} color="white" />
          <Text style={styles.seguidoresText}>300K</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.sidebarOpciones}>
        <TouchableOpacity style={styles.opcionBtn} onPress={() => setVistaActual('feed')}>
          <Ionicons name="home-outline" size={20} color="white" />
          <Text style={styles.opcionText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcionBtn}>
          <Ionicons name="compass-outline" size={20} color="white" />
          <Text style={styles.opcionText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcionBtn}>
          <Ionicons name="videocam-outline" size={20} color="white" />
          <Text style={styles.opcionText}>Reels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcionBtn}>
          <Ionicons name="tv-outline" size={20} color="white" />
          <Text style={styles.opcionText}>IGTV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcionBtn}>
          <Ionicons name="notifications-outline" size={20} color="white" />
          <Text style={styles.opcionText}>Notificaciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 250,
    bottom: 0,
    backgroundColor: 'rgb(0, 0, 59)',
    borderRightWidth: 1,
    borderRightColor: 'rgb(6, 0, 39)',
    padding: 20,
    flexDirection: 'column',
    gap: 20,
  },
  sidebarPerfil: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  sidebarFotoPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  perfilTexto: {
    alignItems: 'center',
  },
  sidebarNombre: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sidebarArroba: {
    color: '#aaa',
    fontSize: 12,
  },
  sidebarSeguidores: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  seguidoresBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgb(82, 82, 109)',
    borderRadius: 8,
  },
  seguidoresText: {
    color: 'white',
    fontSize: 14,
  },
  sidebarOpciones: {
    flexDirection: 'column',
    gap: 10,
  },
  opcionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 8,
    borderRadius: 8,
  },
  opcionText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;