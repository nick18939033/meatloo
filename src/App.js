import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CartScreen from "./pages/CartScreen";
import Categories from "./pages/Categories";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product/:id" element={<ProductScreen />}></Route>
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/chicken" element={<Categories />}></Route>
        <Route path="/seafood" element={<Categories />}></Route>
        <Route path="/mutton" element={<Categories />}></Route>
        <Route path="/spices" element={<Categories />}></Route>
        <Route path="/egg" element={<Categories />}></Route>
        <Route path="/sauces" element={<Categories />}></Route>
        <Route path="/supersavers" element={<Categories />}></Route>
        <Route path="/combo" element={<Categories />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
