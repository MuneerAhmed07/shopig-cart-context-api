import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="shopping-cart">
        <h1>Shopping Cart with Context API</h1>
        <div className="content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  )
}

export default App;
