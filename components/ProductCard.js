import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCardStyle from '../styles/ProductCardStyle'

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={ProductCardStyle.card} onPress={onPress}>
      <Image source={{ uri: product?.image }} style={ProductCardStyle.image} />
      <Text style={ProductCardStyle.title}>{product?.title}</Text>
      <Text style={ProductCardStyle.price}>${product?.price}</Text>
    </TouchableOpacity>
  );
}

