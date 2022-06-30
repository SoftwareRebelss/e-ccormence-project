import React, {useState, useEffect} from 'react'
import './Navbar';
import { images } from '../../constants';
import './Navbar.scss';
import { motion } from 'framer-motion';
import  Cart  from '../../container/Cart/Cart';
import { useStateContext } from '../../context/StateContext';

const Navbar = () => {

  const [ toggle , setToggle] = useState(false);
  const { showCart, setShowCart, qty } = useStateContext();
  return (
    <nav className='app__navbar'>

    <div className='mobile-menu'>
    <img className='menu-toggle' src={images.menuIcon} alt="menuIcon" onClick={() => setToggle(true)} />
     
     {toggle && ( /* if the state === true open up mobile menu*/
      <motion.div
      whileInView={{x:[300 , 0]}}
      transition = {{duration :0.85, ease:'easeOut'}}
      >
     <img className='menu-close' src={images.closeMenu} alt="close-menu" onClick={() => setToggle(false)} />
     <ul>
              {['Collections', 'Men', 'Women', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
      </motion.div>
     )}
     </div>

      <div className='app__logo'>
        <img src={images.logo} alt="logo" />
      </div>

      <ul className='app__menu-item'>
      {['Collections','Men','Women','About','Contact'].map((item) => (
      <li key={`link-${item}`}>
      <a href={`#${item}`}>{item}</a>
       <div/>
      </li>
      ))}
      </ul>

      <div className='app__cart-image'>
        <img className='cart-icon' src={images.cart} alt="cart-logo" onClick={(() => setShowCart(true))} />
        <span className='badge' id='lblCartCount'>{qty}</span>
          { showCart && <Cart/>}  
        <img className='profile-icon' src= {images.avatar} alt="profile" />
      </div>
      
   
    </nav>
  );
}

export default Navbar;