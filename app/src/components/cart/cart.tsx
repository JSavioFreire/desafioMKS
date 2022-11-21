import { CartS } from "./styleCart"

interface Props {
    setOpenCart:any;
    openCart:boolean;
}

const Cart = ({setOpenCart,openCart}:Props) => {

    const handleClick = () =>{
        setOpenCart(false)
    }
    
  return (
    <CartS>
        <div className={openCart?'open':'close'}>
            <div className="header">
                <h1>Carrinho <br/>de compras</h1>
                <p onClick={handleClick}>X</p>
            </div>
                <div className="productCart">
                    <img/>
                    <p>Apple Watch Series 4 GPS</p>
                    <p className="qtd">Qtd:</p>
                    <p className="price">R$399</p>
                    <div className="closeX">
                        X
                    </div>
                </div>
                <div className="total">
                    <p>Total:</p>
                    <p className="price">R$399</p>
                </div>
                <div className="footer">
                    <h2>Finalizar Compra</h2>
                </div>
            </div>
            

    </CartS>
  )
}

export default Cart