
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Cart from "./Cart";

function App() {
 

  return (
   <>
   <ToastContainer />
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
