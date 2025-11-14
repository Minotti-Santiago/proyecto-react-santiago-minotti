import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import './cart.css'
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, deleteProductById, totalPrice, deleteAllProducts } = useContext( CartContext )
    
    if(cart.length === 0 ){
        
        return(
            <div className="empty-cart">
                <h2>No tienes productos en tu carrito!!!</h2>
                <Link to="/" > Volver al inicio </Link>
            </div>
        )
    }

    return (
        <div className="">
            {
            cart.map(( productCart ) => (
                <div key={productCart.id} className="cart-container">
                    <div className="img-cart-container">
                        <img src={productCart.image} alt="" />
                    </div>

                    <div className="cart-info-container">
                        <h2>{ productCart.title }</h2>
                        <p>Precio: { productCart.price * productCart.quantity }</p>
                        <p>Cantidad: { productCart.quantity }</p>
                        <button onClick = { () => deleteProductById (productCart.id) }>Eliminar</button> 
                    </div>
                    
                </div>
            ))
            }

            
                    <h2 className="total-price">precio Total: { totalPrice() } </h2>
                    <button className="total-price" onClick={ () => deleteAllProducts() }>Eliminar todo</button>
        </div>
    )
}

export default Cart