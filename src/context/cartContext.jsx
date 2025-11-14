import { useState, createContext } from 'react'

const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])


    const addProduct = (newProduct) => {
        setCart( [...cart, newProduct ] )
    }

    const totalProducts = () => {
        const quantity = cart.reduce( ( total, productCart ) => total + productCart.quantity, 0 )

        return quantity
    }

    const deleteProductById = (productId) => {
        const productFiltered = cart.filter( (productCart) => productCart.id !== productId );
        setCart( productFiltered );
    }

    const deleteAllProducts= () => {
        setCart([])
    }

    const totalPrice= () => {
        const total = cart.reduce(( total, productCart ) => total + ( productCart.price * productCart.quantity), 0 )

        return total
    }

    return(
        <CartContext.Provider value={ { cart, addProduct, totalProducts, deleteProductById, deleteAllProducts, totalPrice} }>
            {children}
        </CartContext.Provider>
    )
}


export { CartContext,CartProvider }