import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <Navigation />
      </CartContext.Provider>

      {/* Routes */}
      <Route
        exact
        path='/'
        render={() => <Products products={products} addItem={addItem} />}
      />

      <Route path='/cart' render={() => <ShoppingCart cart={cart} />} />
    </div>
  );
}

export default App;
