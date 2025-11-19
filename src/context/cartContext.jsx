import { useState, createContext, useEffect } from 'react'

const CartContext = createContext()


const CartProvider = ({ children }) => {
    const localStorageCart = JSON.parse( localStorage.getItem("cart-ecommerce") )
    const [ cart, setCart ] = useState(localStorageCart ? localStorageCart : [] )

    useEffect(() => {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
    },[cart])

    const addProduct = (newProduct) => {
        const indexProduct = cart.findIndex( ( productCart ) => productCart.id === newProduct.id )

        if( indexProduct === -1){
            setCart( [...cart, newProduct ] )
        }else{
            const newCart = [ ...cart ]
            newCart[indexProduct].quantity = newCart[indexProduct].quantity + newProduct.quantity
            setCart(newCart)
        }

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