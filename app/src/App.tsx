import Header from './components/header/header'
import Cart from './components/cart/cart'
import Products from './components/products/products'
import Footer from './components/footer/footer'

import { GlobalStyle } from './globalStyle/GlobalStyle'

import { useState } from 'react'


function App() {

  const [openCart, setOpenCart] = useState<boolean>(false)

  return (
    <div>

      <GlobalStyle/>
      <Header setOpenCart = {setOpenCart}/>
      <Cart setOpenCart = {setOpenCart} openCart = {openCart}/>
      <Products/>
      <Footer/>
      
    </div>
  )
}

export default App
