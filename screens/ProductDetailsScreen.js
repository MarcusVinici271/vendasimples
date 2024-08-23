import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardDetail from '../components/CardDetail';

const ProductDetailsScreen = ({ route }) => {

   if (!route.params || !route.params.product) {
    return (
      <View style={styles.error}>
        <Text style={styles.title}>Nenhum item selecionado</Text>
        <Text>Por favor, escolha um item na lista para ver os detalhes.</Text>
      </View>
    );
  }


  const { product } = route.params;
 

 return (
    <View style={styles.container}>
      
      <CardDetail
        name={product.name}
        description={product.description}
        price={product.price}
        technicalSpecifications={product.technicalSpecifications}
      />
      
      <View>
        <Text style={styles.vendor}>Informações do Fornecedor:</Text>
        <Text style={styles.description}>Nome: {product.vendorData.name}</Text>
        <Text style={styles.description}>Telefone: {product.vendorData.phone}</Text>
        <Text style={styles.description}>Email: {product.vendorData.email}</Text>
        <Text style={styles.description}>Avaliação: {product.vendorData.rating}</Text>
      </View>
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
    marginTop: 30,
  },
vendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#87CEEB',
  },  
  description: {
    fontSize: 12,
    marginTop: 10,
  },
});

export default ProductDetailsScreen;
