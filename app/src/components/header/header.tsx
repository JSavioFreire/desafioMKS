import { HeaderS } from "./styleHeader"

import { TiShoppingCart } from 'react-icons/ti';

interface Props{
  setOpenCart:any;
}

const Header = ({setOpenCart}:Props) => {

  const handleClick = ()=>{
    setOpenCart(true)
  }


  return (
    <HeaderS>
      <div className="flex">
        <div className="logo">
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <div className="cart" onClick={handleClick}>
          <div className="icon">
            <TiShoppingCart/>
          </div>
          <p>0</p>
        </div>
      </div>
      

    </HeaderS>
  )
}

export default Header