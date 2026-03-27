import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, } from 'react-native';


type Post = {
  id: string;
  text: string;
  imageUrl: string;
};

export default function FeedScreen() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePost = () => {
    if (!text && !imageUrl) return;

    const newPost: Post = {
      id: Date.now().toString(),
      text,
      imageUrl,
    };

    setPosts([newPost, ...posts]);
    setText('');
    setImageUrl('');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.createBox}>
        <TextInput
          placeholder="Message"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        <TextInput
          placeholder="Adicionar post/link"
          value={imageUrl}
          onChangeText={setImageUrl}
          style={styles.input}
        />

        
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.preview} />
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handlePost}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            {item.text ? <Text style={styles.text}>{item.text}</Text> : null}

            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            ) : null}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f9cc7',
    padding: 10,
  },

  createBox: {
    backgroundColor: '#f1e7e7',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#c0b9b9',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },

  preview: {
    width: '200%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#24528d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#182233',
    fontWeight: 'bold',
  },

  post: {
    backgroundColor: '#a89898c2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    marginBottom: 10,
    fontSize: 10,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
