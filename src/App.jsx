
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
 

  return (
   <>
   <ToastContainer />
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
