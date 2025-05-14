import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import ProductContext from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

export default function ProductListScreen({ navigation }) {
  const { products, loading, error, setSelectedProduct } = useContext(ProductContext);

  if(loading) return 
  <ActivityIndicator size='large'/>

  if(error) return <Text>{"Please try again later"}</Text>

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => {
              setSelectedProduct(item);
              navigation.navigate('ProductDetail');
            }}
          />
        )}
      />
    </View>
  );
}
