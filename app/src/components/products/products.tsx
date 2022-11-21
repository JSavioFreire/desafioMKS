import { AllProducts } from "./styleProduct"
import { useFetch } from '../../hook/useFetch'
import EachProduct from "./eachProduct"


const Products = () => {
    const url:string = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'

    const { data,loading } = useFetch(url)
  return (
    <div>
        <AllProducts>
          {loading && <p>carregando</p>}
          {data && data.map( product => 
            <EachProduct key={product.id} name={product.name} image={product.photo} price={product.price} description={product.description}/>
     
        )}
        </AllProducts>
    </div>
  )
}

export default Products