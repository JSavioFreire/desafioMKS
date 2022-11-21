import { EachProductS } from "./styleProduct"


interface Props {
  name:string;
  price:string;
  image:string;
  description:string;
}

const EachProduct = ({name, image, price, description}:Props) => {

  const priceToFixed = Number(price).toFixed()    
  
  return (
    <EachProductS>
      <img src={image}/>
      <div className="flex">
        <h2>{name}</h2>
        <h2 className="price">${priceToFixed}</h2>
      </div>
      <p>{description}</p>
      <div className="comprar">Comprar</div>
    </EachProductS>
  )
}

export default EachProduct