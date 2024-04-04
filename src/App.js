import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import PopupChat from "./component/PopupChat";
function App() {
  // ----------lay du lieu tu API--------------
  const [listProduct, setListProduct] = useState([]);
  const fetchAPI = async () => {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const data = await response.json();
    const products = [];

    for (let i = 0; i < 8; i++) {
      products.push(data[i]);
    }
    setListProduct(products);
    // console.log(products);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div style={{ padding: "0 10vw" }}>
            <Navbar />

            <PopupChat />

            <Routes>
              <Route
                path="/"
                element={<HomePage data={listProduct} />}
                exact
              ></Route>

              <Route
                path="/shop"
                element={<ShopPage data={listProduct} />}
              ></Route>

              <Route
                path="/detail/:productId"
                element={<DetailPage data={listProduct} />}
              ></Route>

              <Route path="/cart" element={<CartPage />}></Route>

              <Route path="/checkout" element={<CheckoutPage />}></Route>

              <Route path="/login" element={<LoginPage />}></Route>

              <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
