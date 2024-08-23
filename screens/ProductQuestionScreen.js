import { View, Text, StyleSheet } from 'react-native';

const ProductCommentsScreen = ({ route }) => {

   if (!route.params || !route.params.duvidas) {
    return (
      <View style={styles.error}>
        <Text style={styles.title}>Nenhum item selecionado</Text>
        <Text>Por favor, escolha um item na lista para ver as dúvidas.</Text>
      </View>
    );
  }


  const { duvidas } = route.params;

  return (
    <View style={styles.container}>
      
      {duvidas.map((duvidas, index) => (
        <View key={index} style={styles.description}>
          <Text style={styles.user}>{duvidas.user} disse:</Text>
          <Text style={styles.question}>Pergunta: {duvidas.question}</Text>
          <Text style={styles.question}> Resposta: {duvidas.answer}</Text>
          <Text style={styles.date}>{new Date(duvidas.date).toLocaleDateString()}</Text>
          
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
  question: {
    fontSize: 15,
    marginBottom: 10,
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
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
