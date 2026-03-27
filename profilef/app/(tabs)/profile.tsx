import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen() {
  const [imageUrl, setImageUrl] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  function addPost() {
    if (!imageUrl) return;
    setPosts([imageUrl, ...posts]);
    setImageUrl('');
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.header} />

/    
      <View style={styles.avatar} >
        {/* https://icons.expo.fyi/Index */}
         <Ionicons name="person" size={50} color={"#000"} />
      </View>


/
      <Text style={styles.name}>Arthur</Text>
      <Text style={styles.username}>santos d. almeida</Text>

      
      <View style={styles.actions}>
        <Text style={styles.button}>Seguindo</Text>
        <Text style={styles.button}>Comentários</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image source={{ uri: item }} style={styles.postImage} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233753a2',
  },

  header: {
    height: 120,
    backgroundColor: '#a0a5adb7',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#597fcaa4',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45,
    borderWidth: 4,
    borderColor: '#0f172a',
  },

  name: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dacfcfe5',
    marginTop: 10,
  },

  username: {
    textAlign: 'center',
    color: '#a6b3c5',
    marginBottom: 10,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#608fd485',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#16181be1',
    fontWeight: 'bold',
  },

  post: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#4a4f57',
  },

  postImage: {
    width: '100%',
    height: 200,
  },
});
