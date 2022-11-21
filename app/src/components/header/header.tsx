import { HeaderS } from "./styleHeader"

import { TiShoppingCart } from 'react-icons/ti';


const Header = () => {
  return (
    <HeaderS>
      <div className="flex">
        <div className="logo">
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <div className="cart">
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