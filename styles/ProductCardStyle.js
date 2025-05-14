import { StyleSheet } from "react-native"

export default ProductCardStyle = StyleSheet.create({
    card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    elevation: 3,
  },
  image: {
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    marginTop: 5,
    color: 'green',
  },
})