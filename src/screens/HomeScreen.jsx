import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Feed from "../components/Feed";
import BottomBar from "../components/BottomBar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.feed}>
        <Feed />
      </View>

      <BottomBar />

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