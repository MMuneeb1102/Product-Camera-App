import React, { useContext } from 'react'
import { Image, View,Text } from 'react-native'
import ProductContext from '../context/ProductContext'
import CustomButton from '../components/CustomButton'
import ProductDetailStyle from '../styles/ProductDetailStyle'

const ProductDetailScreen = ({navigation}) => {
    const {selectedProduct} = useContext(ProductContext)
  return (
    <View style={ProductDetailStyle.container}>
      <Image style={ProductDetailStyle.image} source={{uri: selectedProduct.image}}/>
      <Text style={ProductDetailStyle.title}>{selectedProduct.title}</Text>
      <Text>{selectedProduct.price}</Text>
      <Text>{selectedProduct.category}</Text>
      <Text>{selectedProduct.description}</Text>
      <View style={{marginTop: 20}} >
        <CustomButton btnText="Open Camera" btnOnPress={()=>{NavigationActivation.navigate('Camera')}}/>
      </View>
    </View>
  )
}

export default ProductDetailScreen
