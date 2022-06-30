import React, { useRef } from 'react';
import './Cart.scss';
import { images } from '../../constants';
import { useStateContext } from '../../context/StateContext';






const Cart = () => {
  const cartRef = useRef();
  const {  cartItems, qty, onRemove } = useStateContext();
  const total = 350 * qty;

  return (
    <div
    
    className='cart-container-checkout' ref={cartRef}>

      <div>
      <h2 className='cart-header-checkout'>Cart</h2>
      <hr/>
    {cartItems.length < 1 && (
     <div className="product-prices-details">
     <h3>Your cart is empty</h3>
     </div>
     )}

     {cartItems.length >= 1 && cartItems.map((item) =>(
      <>
      <div className='product-detailts' key={item}>
      <img className='product-checkout-image' src={images.product01} alt="productImage" />
      <p className='product-prices-details'>Fall limited Sneakers <br/><span>E350.00 x {qty} <em>E{total}</em></span></p>
      <img className='delete-icon' src={images.deleteItem} alt=''  onClick={() => onRemove(item)}></img>
      </div>
      <button className='checkout-button'>Checkout</button>
      </>
  
     ))}
     
      </div>
    </div>
  );
}

export default  Cart;