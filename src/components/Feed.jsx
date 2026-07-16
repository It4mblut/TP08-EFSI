import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PostCard from "./PostCard";

export default function Feed() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const historias = [
    {
      id: "1",
      usuario: "@gatitosLindos",
      foto: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    },
    {
      id: "2",
      usuario: "@amoGatitos",
      foto: "https://cdn2.thecatapi.com/images/182.jpg",
    },
    {
      id: "3",
      usuario: "@gato67",
      foto: "https://cdn2.thecatapi.com/images/2en.jpg",
    },
    {
      id: "4",
      usuario: "@michi",
      foto: "https://cdn2.thecatapi.com/images/38g.jpg",
    },
    {
      id: "5",
      usuario: "@gatito",
      foto: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    },
  ];

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=20")
      .then((res) => {
        const datos = res.data.map((item, index) => ({
          id: item.id,
          url: item.url,
          username: `@gatito${index + 1}`,
          descripcion: "Otro gatito haciendo cosas de gatos.",
          likes: Math.floor(Math.random() * 900 + 100),
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
      contentContainerStyle={{ paddingBottom: 90 }}
      ListHeaderComponent={
        <FlatList
          horizontal
          data={historias}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.historias}
          renderItem={({ item }) => (
            <View style={styles.historia}>
              <Image
                source={{ uri: item.foto }}
                style={styles.fotoHistoria}
              />
              <Text style={styles.usuarioHistoria}>
                {item.usuario}
              </Text>
            </View>
          )}
        />
      }
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

  historias: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  historia: {
    alignItems: "center",
    marginRight: 18,
  },

  fotoHistoria: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#ff00aa",
  },

  usuarioHistoria: {
    color: "white",
    fontSize: 11,
    marginTop: 6,
  },
});