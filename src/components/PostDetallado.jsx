import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function PostDetallado({ route, navigation }) {
  const { post } = route.params;
  
  const [likes, setLikes] = useState(post.likes);
  const [likeado, setLikeado] = useState(false);

  function toggleLike() {
    if (likeado) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLikeado(!likeado);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.volverBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.volverText}>Volver al Feed</Text>
      </TouchableOpacity>

      <View style={styles.cardDetalle}>
        <View style={styles.headerUser}>
          <Ionicons name="person-circle-outline" size={32} color="white" />
          <Text style={styles.username}>{post.username}</Text>
        </View>

        <Image source={{ uri: post.url }} style={styles.imagenPost} />
                
        <View style={styles.interacciones}>
          <View style={styles.filaIconos}>
            <TouchableOpacity onPress={toggleLike} style={styles.accionBoton}>
              <Ionicons 
                name={likeado ? "heart" : "heart-outline"} 
                size={26} 
                color={likeado ? "red" : "white"} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.accionBoton}>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.accionBoton}>
              <Ionicons name="paper-plane-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.likesText}>{likes} Me gusta</Text>
          
          <Text style={styles.descripcion}>
            <Text style={{fontWeight: 'bold'}}>{post.username}</Text> {post.descripcion}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  volverBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    marginBottom: 20 
  },
  volverText: { 
    color: 'white', 
    fontSize: 16 
  },
  cardDetalle: { 
    backgroundColor: 'rgb(6, 0, 39)', 
    borderRadius: 12, 
    padding: 15 
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12
  },
  username: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  imagenPost: { 
    width: '100%', 
    height: 350, 
    borderRadius: 8, 
    resizeMode: 'cover' 
  },
  interacciones: { 
    marginTop: 12, 
    gap: 8 
  },
  filaIconos: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 4
  },
  accionBoton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesText: { 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 14
  },
  descripcion: { 
    color: 'white',
    fontSize: 14,
    lineHeight: 18
  }
});

export default PostDetallado;