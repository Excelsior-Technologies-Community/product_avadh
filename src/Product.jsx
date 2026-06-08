import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './product.css'
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import{NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        toast.success("Products loaded successfully!", { toastId: 'products-loaded' });
      });
  }, []);

  return (
    <div className="container">
      <h1 style={{ display: "inline-block"}} >Products
        <NavLink to="/cart">
       <FaShoppingCart style={{ color: "white", marginLeft: "60px" }}  size={40} className="s-icon"/></NavLink>
      </h1>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            
              <FaShoppingCart size={30} className="c-icon" onClick={()=>dispatch(addToCart(product))} />
            
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <Link to={`/product/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;