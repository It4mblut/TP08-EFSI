import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import PostCard from './PostCard';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=12')
      .then(response => {        
        const datosFormateados = response.data.map((item, index) => ({
          id: item.id,
          url: item.url,
          username: `@amorAGatitos${index + 1}`,
          descripcion: 'Otro gatito haciendo cosas de gatos',
          likes: Math.floor(Math.random() * 500) + 10
        }));
        setPosts(datosFormateados);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3} 
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <PostCard 
            post={item} 
            abrirPost={(selectedPost) => navigation.navigate('Detalle', { post: selectedPost })} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Feed;