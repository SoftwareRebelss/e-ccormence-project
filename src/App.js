import React from 'react'
import { Cart, Hero} from './container';
import { Navbar} from './components';
import './App.scss';
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='App__container'>
        <StateContext>
          <div style={{ color: 'blue', fontFamily : 'Kumbh Sans'}}>
          <Toaster/>
          </div>
        <Navbar/>
        <Hero/>
        </StateContext>
    </div> 
  );
}

export default App;