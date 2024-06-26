import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./pages/Checkout/Checkout";
import Confirmation from "./pages/Confirmation/Confirmation";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* TODO:  */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
