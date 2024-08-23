import { View, Image, StyleSheet, Text } from 'react-native';

const ProductImagesScreen = ({ route }) => {

   if (!route.params || !route.params.image) {
    return (
      <View style={styles.error}>
        <Text style={styles.title}>Nenhum item selecionado</Text>
        <Text>Por favor, escolha um item na lista para ver as imagens.</Text>
      </View>
    );
  }


  const { image } = route.params;

  return (
    <View style={styles.container}>
      {image.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  error:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  }, 
  image: {
    width: 300,
    height: 300,
    margin: 20,
    borderWidth: 2, 
    borderColor: 'black',
  },
});

export default ProductImagesScreen;
