import { View, Text, StyleSheet } from 'react-native';

const ProductCommentsScreen = ({ route }) => {

   if (!route.params || !route.params.comentarios) {
    return (
      <View style={styles.error}>
        <Text style={styles.title}>Nenhum item selecionado</Text>
        <Text>Por favor, escolha um item na lista para ver os comentários.</Text>
      </View>
    );
  }


  const { comentarios } = route.params;

  return (
    <View style={styles.container}>
      
      {comentarios.map((comentario, index) => (
        <View key={index} style={styles.description}>
          <Text style={styles.user}>{comentario.user} disse:</Text>
          <Text style={styles.comment}>{comentario.comment}</Text>
          <Text style={styles.date}>{new Date(comentario.date).toLocaleDateString()}</Text>
          <Text style={styles.rating}> Nota:{comentario.rating}</Text>
        </View>
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
  user: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  comment: {
    fontSize: 15,
    marginBottom: 10,
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  rating: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#87CEEB',
  },
   description: {
    fontSize: 16,
    marginBottom: 10,
    padding:20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  }, 
});

export default ProductCommentsScreen;
