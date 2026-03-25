import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useState } from 'react';

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
      <View style={styles.avatar} />

/
      <Text style={styles.name}>Arthur</Text>
      <Text style={styles.username}>santos d. almeida</Text>

      
      <View style={styles.actions}>
        <Text style={styles.button}>Seguindo</Text>
        <Text style={styles.button}>Conmentários</Text>
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
    backgroundColor: '#183080'
  },
  header: {
    height: 100,
    backgroundColor: '#11173141'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#3a3a6e88',
    alignSelf: 'center',
    marginTop: -40,
    borderWidth: 4,
    borderColor: '#738096a9'
  },
  name: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10
  },
  username: {
    textAlign: 'center',
    color: '#666'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#99aae688',
    padding: 6,
    marginHorizontal: 5,
    borderRadius: 6
  },
  postBox: {
    padding: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#848cb831',
    borderRadius: 5,
    padding: 4,
    marginBottom: 20
  },
  post: {
    margin: 10,
    backgroundColor: '#ffffff86',
    borderRadius: 10,
    overflow: 'hidden'
  },
  postImage: {
    width: '60%',
    height: 100
  }
});