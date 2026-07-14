import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

function PostCard({ post, abrirPost }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => abrirPost(post)}>
      <Image source={{ uri: post.url }} style={styles.imagen} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '31%',
    aspectRatio: 1,
  },
  imagen: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default PostCard;