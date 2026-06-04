import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './product.css'

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return(
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="d-container">
        <h1>Product Details</h1>
    <div className="details">
        <div className="left">
      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />
    </div>

    <div className="right">
      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h3>Price: ${product.price}</h3>

      <h3>Category: {product.category}</h3>

      <h3>Rating: {product.rating}</h3>

      <Link to="/">Back to Products</Link>
    </div>
    </div>
    </div>
  );
}

export default ProductDetails;