import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';
import PostCard from './PostCard.jsx';

function Feed({ abrirPost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=21', {
      headers: {
        'x-api-key': 'live_zzCGWw1DQQ9xjtLrQ6zLi3aNLseLeXTBVbvB8jDk50ucSqF6lxGHTaAE1bKVGnYb'
      }
    })
    .then(respuesta => setPosts(respuesta.data))
    .catch(error => console.log(error));
  }, []);

  const historias = [
    { usuario: '@gatitosLindos', foto: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg' },
    { usuario: '@amoGatitos', foto: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww' },
    { usuario: '@gatoo67', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNBLmnNWfkgI83S1NuVF2k6dMjISlhRVMKQ&s' },
    { usuario: '@gatitos_', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bFJhvKYCa7KA85tr7HmB5ua-PHqBnU5KkQ&s' },
    { usuario: '@xXmichisXx', foto: 'https://www.clarin.com/2024/07/04/uteodLeuh_2000x1500__1.jpg' },
    { usuario: '@gat0z_', foto: 'https://cdn2.thecatapi.com/images/182.jpg' },
    { usuario: '@C4t', foto: 'https://cdn2.thecatapi.com/images/2en.jpg' },
    { usuario: '@CDN', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZe-5VjXmag6NrQhcAzS-JbcnOzUx_jguQw&s' },
    { usuario: '@gat0_o', foto: 'https://cdn2.thecatapi.com/images/38g.jpg' }
  ];

  return (
    <ScrollView style={styles.feedContenedor}>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.feedHistorias}
      >
        {historias.map((h, i) => (
          <View key={i} style={styles.historia}>
            <Image source={{ uri: h.foto }} style={styles.historiaImg} />
            <Text style={styles.historiaText}>{h.usuario}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.feed}>
        {posts.map(post => (
          <PostCard key={post.id} post={post} abrirPost={abrirPost} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  feedContenedor: {
    flex: 1,
  },
  feed: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 20,
  },
  feedHistorias: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
  },
  historia: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  historiaImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: 'purple',
  },
  historiaText: {
    fontSize: 12,
    textAlign: 'center',
  }
});

export default Feed;