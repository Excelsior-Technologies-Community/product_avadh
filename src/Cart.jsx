import React from "react";
import { useSelector } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import './cart.css';
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./cartSlice";
const Cart=()=>{
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    return(<>
        

        <div className="cart-container">
         
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-itemssss">
                     <h1>Your Cart</h1>
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.thumbnail} alt={item.title} style={{ width: "100px" }} />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div className="quantity-controls">
                                <button onClick={() => dispatch(increaseQuantity(item.id))}><FaPlus /></button>
                                <button onClick={() => dispatch(decreaseQuantity(item.id))}><FaMinus /></button>
                                <button onClick={() => dispatch(removeFromCart(item.id))}><FaTrash /></button>
                            </div>
                             <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </>)
}
export default Cart;