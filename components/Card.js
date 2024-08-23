import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ nome, descricao, preco, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.description}>{descricao}</Text>        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 2, 
    borderColor: 'black',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Card;
