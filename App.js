import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductImageScreen from './screens/ProducImageScreen';
import ProductQuestionScreen from './screens/ProductQuestionScreen';
import ProductCommentScreen from './screens/ProductCommentScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProductScreen} />
        <Tab.Screen name="Detalhes" component={ProductDetailsScreen} />
        <Tab.Screen name="Imagens" component={ProductImageScreen} />
        <Tab.Screen name="Perguntas" component={ProductQuestionScreen} />
        <Tab.Screen name="Comentários" component={ProductCommentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;