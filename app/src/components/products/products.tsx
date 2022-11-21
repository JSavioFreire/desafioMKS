import { AllProducts } from "./styleProduct"
import { useFetch } from '../../hook/useFetch'
import EachProduct from "./eachProduct"


const Products = () => {
    const url:string = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC'

    const { data,loading } = useFetch(url)
    
  return (
    <div>
        <AllProducts>
            {loading && <p>carregando</p>}
        {data && data.map((product) => (
            <EachProduct key={product.id} product={product} />
                
            

        ))}
        </AllProducts>
    </div>
  )
}

export default Products