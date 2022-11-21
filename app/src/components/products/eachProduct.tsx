import { EachProductS } from "./styleProduct"

const EachProduct = ({product}) => {
  return (
    <EachProductS>
        <h1>{product.name}</h1>
    </EachProductS>
  )
}

export default EachProduct