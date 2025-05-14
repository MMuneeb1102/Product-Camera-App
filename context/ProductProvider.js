import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
export default ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchProducts = async () =>{
      try {
        const res = await fetch('https://fakestoreapi.com/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(!res.ok){
          console.log("Error while fetching data")
        }
        const data = await res.json();
        setLoading(false)
        setProducts(data)
        // console.log(data)
      } catch (err) {
        setError(err)
        console.log(err)
        setLoading(false)
      }
    }

    useEffect(()=>{
      fetchProducts();
    }, [])

  return (
    <ProductContext.Provider value={{ products, selectedProduct, setSelectedProduct, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};