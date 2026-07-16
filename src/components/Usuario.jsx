import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Usuario() {

  const usuario = {
    nombre: "Usuario Demo",
    username: "@usuario",
    bio: "Amante de los gatitos",
    seguidores: 1254,
    seguidos: 321,
    publicaciones: 21,
    foto: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
  };

  const publicaciones = Array.from(
    { length: 21 },
    (_, i) => ({
      id: i.toString(),
      url: `https://cdn2.thecatapi.com/images/${182 + i}.jpg`,
    })
  );

  return (
    <View style={styles.container}>

      <View style={styles.info}>

        <Image
          source={{ uri: usuario.foto }}
          style={styles.avatar}
        />

        <View style={styles.stats}>

          <View style={styles.stat}>
            <Text style={styles.numero}>
              {usuario.publicaciones}
            </Text>

            <Text style={styles.label}>
              Posts
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.numero}>
              {usuario.seguidores}
            </Text>

            <Text style={styles.label}>
              Seguidores
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.numero}>
              {usuario.seguidos}
            </Text>

            <Text style={styles.label}>
              Siguiendo
            </Text>
          </View>

        </View>

      </View>

      <Text style={styles.nombre}>
        {usuario.nombre}
      </Text>

      <Text style={styles.bio}>
        {usuario.bio}
      </Text>

      <FlatList
        data={publicaciones}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 90,
        }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={styles.post}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,59)",
    padding: 15,
  },

  info: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  stat: {
    alignItems: "center",
  },

  numero: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  label: {
    color: "#ccc",
    fontSize: 13,
  },

  nombre: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  bio: {
    color: "#ddd",
    marginTop: 5,
  },

  post: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },

});