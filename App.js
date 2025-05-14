import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductProvider from './context/ProductProvider'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CameraScreen from './screens/CameraScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ProductList' component={ProductListScreen}/>
          <Stack.Screen name='ProductDetail' component={ProductDetailScreen}/>
          <Stack.Screen name='Camera' component={CameraScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}


