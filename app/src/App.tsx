import Header from './components/header/header'
import Products from './components/products/products'
import Footer from './components/footer/footer'

import { GlobalStyle } from './globalStyle/GlobalStyle'

import { useFetch } from './hook/useFetch'

function App() {


  const url:string = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC'

  useFetch(url)
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
