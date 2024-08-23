import { View, FlatList, TouchableOpacity, ActivityIndicator, Text , StyleSheet  } from 'react-native';
import { useState, useEffect } from 'react'
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native'; 
import products from '../products.json';

const ProductScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setProductsData(products);
        setIsLoading(false);
      }, 4000); 
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      </View>
    );
  }

const navigation = useNavigation();

  

  const handleProductPress = (item) => {
    navigation.navigate('Comentários', { comentarios: item.comments });
    navigation.navigate('Perguntas', { duvidas: item.questions});
    navigation.navigate('Imagens', { image: [item.image.image1, item.image.image2] });
    navigation.navigate('Detalhes', { product: item });
    
  };

  return (
    
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>          
            <Card
              nome={item.name}
              descricao={item.description}              
              imageUrl={item.image.image1}
            />
          </TouchableOpacity>         
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({   
   container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#87CEEB',
   }
});




export default ProductScreen;
