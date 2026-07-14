import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function PostDetallado({ post, onVolver }) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000));
  const [likeado, setLikeado] = useState(false);

  function toggleLike() {
    if (likeado) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLikeado(!likeado);
  }

  const comentarios = [
    { usuario: '@gatitosLindos', texto: 'hermoso!!' },
    { usuario: '@amoGatitos', texto: 'que tierno' },
    { usuario: '@gatoo67', texto: 'jaja, que torpe' },
  ];

  return (
    <ScrollView style={styles.postdetallado}>
      {/* Botón Volver */}
      <TouchableOpacity onClick={onVolver} style={styles.volverButton}>
        <Text style={styles.volverButtonText}>← Volver</Text>
      </TouchableOpacity>

      <View style={styles.postdetalladoContenido}>
        {/* Imagen adaptable */}
        <Image source={{ uri: post.url }} style={styles.postdetalladoImagen} />
        
        <View style={styles.postdetalladoInfo}>
          <Text style={styles.postdetalladoUsuario}>@gatoo67</Text>
          <Text style={styles.postdetalladoDesc}>Otro gatito haciendo cosas de gatos</Text>
          <Text style={styles.postdetalladoFecha}>26 de mayo de 2025</Text>
          
          {/* Fila de Botones de Acción */}
          <View style={styles.postdetalladoAcciones}>
            <TouchableOpacity onPress={toggleLike} style={styles.accionButton}>
              <Ionicons 
                name={likeado ? "heart" : "heart-outline"} 
                size={20} 
                color={likeado ? "red" : "white"} 
              />
              <Text style={styles.accionText}> {likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.accionButton}>
              <Ionicons name="chatbubble-outline" size={20} color="white" />
              <Text style={styles.accionText}> Comentar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.accionButton}>
              <Ionicons name="paper-plane-outline" size={20} color="white" />
              <Text style={styles.accionText}> Compartir</Text>
            </TouchableOpacity>
          </View>

          {/* Comentarios */}
          <View style={styles.postdetalladoComentarios}>
            {comentarios.map((comentario, i) => (
              <Text key={i} style={styles.comentarioTexto}>
                <Text style={styles.comentarioUsuario}>{comentario.usuario}</Text> {comentario.texto}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  postdetallado: {
    flex: 1,
    backgroundColor: 'rgb(43, 43, 85)',
    padding: 15,
  },
  volverButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    marginBottom: 10,
  },
  volverButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  postdetalladoContenido: {
    backgroundColor: 'rgb(79, 79, 146)',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 40,
  },
  postdetalladoImagen: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  postdetalladoInfo: {
    padding: 15,
    gap: 10,
  },
  postdetalladoUsuario: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  postdetalladoDesc: {
    color: 'white',
    fontSize: 14,
  },
  postdetalladoFecha: {
    color: '#ccc',
    fontSize: 12,
  },
  postdetalladoAcciones: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 10,
  },
  accionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  accionText: {
    color: 'white',
    fontSize: 14,
  },
  postdetalladoComentarios: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 10,
  },
  comentarioTexto: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
  },
  comentarioUsuario: {
    fontWeight: 'bold',
  },
});

export default PostDetallado;