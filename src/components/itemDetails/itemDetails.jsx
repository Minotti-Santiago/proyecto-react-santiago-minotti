import './itemDetails.css'
import ItemCount from '../itemCount/itemCount'
import { useContext } from 'react'
import { CartContext }  from '/src/context/cartContext'

const ItemDetails = ({product}) => {
    const { addProduct } = useContext(CartContext)

const addToCart = ( count ) => {
    const newProduct = { ...product, quantity : count }
    addProduct(newProduct)
}


    return (
        <div className='item-details'>
            <img className='img-details' src={product.image} alt={product.title} />
            <div className='info-details'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p> precio:$ {product.price}</p>

                <ItemCount stock={ product.stock} addToCart={ addToCart }/>
            </div>
            
        </div>
    )
}

export default ItemDetails