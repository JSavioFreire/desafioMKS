import Header from './components/header/header'
import Products from './components/products/products'
import Footer from './components/footer/footer'

import { GlobalStyle } from './globalStyle/GlobalStyle'


function App() {



  return (
    <div>

      <GlobalStyle/>
      
      <Header/>
      <Products/>
      <Footer/>
      
    </div>
  )
}

export default App
