import React from 'react'
import { useCart } from '../context/CartContext'

const ProductList = () => {

    const {cart, dispatch} = useCart();

    console.log(cart);

    const products = [
        {id: 1, name: "Product A", price: 30},
        {id: 2, name: "Product B", price: 20},
        {id: 3, name: "Product C", price: 50},
    ]

    const addToCart = (product) => {
        dispatch({type: "ADD_TO_CART", payload: product});
    }

  return (
    <div className='product-list'>
      <h2>Products</h2>
      {
        products.map((product) => (
            <div key={product.id} className='product-item'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default ProductList;
