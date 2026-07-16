import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Feed from "../components/Feed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.feed}>
        <Feed />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,59)",
  },

  feed: {
    flex: 1,
    paddingBottom: 75,
  },

});