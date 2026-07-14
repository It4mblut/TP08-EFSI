import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>
      <View style={styles.headerSearch}>
        <TextInput 
          placeholder="Buscar" 
          placeholderTextColor="gray" 
          style={styles.searchInput}
        />
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings-outline" size={22} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="camera-outline" size={22} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="paper-plane-outline" size={22} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.iconButton, styles.headerNewpost]}>
          <Text style={styles.newPostText}>+ New Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgb(0, 0, 59)',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 100,
  },
  headerLogo: {
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSearch: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 14,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerNewpost: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  newPostText: {
    color: 'white',
    fontSize: 14,
  },
});

export default Header;