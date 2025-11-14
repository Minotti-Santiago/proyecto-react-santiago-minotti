import './cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)
    const quantityProducts = totalProducts()

    return(

        <Link to="/cart" className="cart-widget">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#fff"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            <p className="cart-widget-text">{ quantityProducts !== 0 && quantityProducts }</p>
        </Link>
    )

}

export default CartWidget