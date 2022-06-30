
import React, {useState} from 'react'
import { images } from '../../constants';
import './Hero.scss';
import { useStateContext } from '../../context/StateContext';



const productImages = [images.product01, images.product02, images.product03, images.product04]
  
const productDetailts = {
  title:'Sneaker Company', slogan: 'Fall limited Sneakers.',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price:'350.00', percentage: '50%'
}

 


const Hero = () => {
  const [ index , setIndex] = useState(0); /*index to show pointed images*/
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  return (
    <>
  <div className='hero__container'
  onClick={(() => setShowCart(false))}>

   <div className='image__container'>
    <img className='big-image' src={productImages[index]} alt="productimages" />


    <div className='small-images'>
    {productImages.map((itemImage , CurrentIndex) => ( /*updating the useState from [0] to current Index*/ 
      <img className='small-image' src={itemImage} onMouseEnter = {() => setIndex(CurrentIndex) } alt="small-images"
      
      />
    ))}
   </div>
   </div>
   
   <div className='text__container'>

    <div className='hero__companyName'>
    <h2>{productDetailts.title}</h2>
    </div>

    <h1>{productDetailts.slogan}</h1>
    <div className='product__disctription' >
    <p>{productDetailts.description}</p>
    </div>
     

     <div className='prices'>
     <span>E{productDetailts.price}</span>
     <span className='dicounts'>{productDetailts.percentage}</span>
     
     </div>
    
     <div className='buttons'>
    
    <div className='minus-add'>
    
    <span className='minus' onClick={decQty}>-</span>
    <span className='num'>{qty}</span>
    <span className='add' onClick={incQty}>+</span>

    </div>
     <button className='add-to-cart'
     onClick={() => onAdd(qty)}>
    <img src={images.cart} alt="addcart" />

      Add to cart</button>
   </div>
   </div>
     
   
  
  </div>
  <div className='author'>
  Coded with react.js by  <a href="https://masiko-d.pages.dev/">Masiko D</a>
 
 </div></>
   
  
  );
}

export default Hero;