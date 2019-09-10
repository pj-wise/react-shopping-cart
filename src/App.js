import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = id => {
    cart.map((item, i) => {
      if (id === item.id) {
        let newCart = [...cart];
        newCart.splice(i, 1);
        setCart(newCart);
      }
    });
  };

  //with filter if ID's were all different it WOULD be functional.
  // const removeItem = id => {
  //   setCart(cart.filter(item => item.id !== id));
  // };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className='App'>
          <Navigation />

          {/* Routes */}
          <Route
            exact
            path='/'
            render={() => <Products products={products} addItem={addItem} />}
          />

          <Route path='/cart' render={() => <ShoppingCart cart={cart} />} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
