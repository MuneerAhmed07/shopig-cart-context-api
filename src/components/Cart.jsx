import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {

    const {cart, dispatch} = useCart();

    const removeFromCart = (id) => {
        dispatch({type: "REMOVE_FROM_CART", payload: id});
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='cart'>
    <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ): (
            cart.map((item) => (
                <div key={item.id} className='cart-item'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))
        )}
        <h3>Total: ${total}</h3>
    </div>
  )
}

export default Cart;
