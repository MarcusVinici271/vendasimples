import { View, Text, StyleSheet } from 'react-native';

const CardDetail = ({ name, description, price, technicalSpecifications }) => {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>R${price}</Text> 
        <Text style={styles.heading}>Especificações Técnicas:</Text>
        {Object.entries(technicalSpecifications).map(([key, value]) => (
          <View key={key} style={styles.specRow}>
            <Text style={styles.specName}>{key}:</Text>
            <Text style={styles.specValue}>{value}</Text>
          </View>       
        ))}
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
    backgroundColor: '#ffffff'
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    margin: 5,
  },
  price: {
    margin: 5,
    fontWeight: 'bold',
  },
  heading: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  specRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  specName: {
    fontWeight: 'bold',
    marginRight: 5,
    fontStyle: 'italic',
  },
  specValue: {
    flex: 1,
  },
});

export default CardDetail;
