import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
 FlatList,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import PostCard from './PostCard';

function Feed() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const historias = [
    {
      id: "1",
      usuario: "@gatitosLindos",
      foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
    },
    {
      id: "2",
      usuario: "@amoGatitos",
      foto: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop"
    },
    {
      id: "3",
      usuario: "@gatoo67",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNBLmnNWfkgI83S1NuVF2k6dMjISlhRVMKQ&s"
    },
    {
      id: "4",
      usuario: "@gatitos_",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bFJhvKYCa7KA85tr7HmB5ua-PHqBnU5KkQ&s"
    },
    {
      id: "5",
      usuario: "@xXmichisXx",
      foto: "https://www.clarin.com/2024/07/04/uteodLeuh_2000x1500__1.jpg"
    },
    {
      id: "6",
      usuario: "@gat0z_",
      foto: "https://cdn2.thecatapi.com/images/182.jpg"
    },
    {
      id: "7",
      usuario: "@C4t",
      foto: "https://cdn2.thecatapi.com/images/2en.jpg"
    },
    {
      id: "8",
      usuario: "@CDN",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZe-5VjXmag6NrQhcAzS-JbcnOzUx_jguQw&s"
    },
    {
      id: "9",
      usuario: "@gat0_o",
      foto: "https://cdn2.thecatapi.com/images/38g.jpg"
    }
  ];

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=21")
      .then((respuesta) => {
        const datos = respuesta.data.map((post, index) => ({
          id: post.id,
          url: post.url,
          username: `@gatito${index + 1}`,
          descripcion: "Otro gatito haciendo cosas de gatos",
          likes: Math.floor(Math.random() * 1000),
        }));

        setPosts(datos);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.feed}
      ListHeaderComponent={() => (
        <FlatList
          horizontal
          data={historias}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.feedHistorias}
          renderItem={({ item }) => (
            <View style={styles.historia}>
              <Image
                source={{ uri: item.foto }}
                style={styles.historiaImg}
              />
              <Text style={styles.historiaText}>
                {item.usuario}
              </Text>
            </View>
          )}
        />
      )}
      renderItem={({ item }) => (
        <PostCard
          post={item}
          abrirPost={(post) =>
            navigation.navigate("Detalle", { post })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  feed: {
    padding: 20,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },

  feedHistorias: {
    paddingBottom: 20,
    gap: 20,
  },

  historia: {
    alignItems: "center",
    marginRight: 20,
  },

  historiaImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "purple",
    marginBottom: 5,
  },

  historiaText: {
    color: "white",
    fontSize: 12,
  },
});

export default Feed;