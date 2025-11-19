import { useState, Link } from 'react'
import './itemCount.css'


const ItemCount = ({stock, addToCart}) => {
    const[ count, setCount] = useState(1)

    const handleClickLess = () => {
        if ( count > 1 ) {
            setCount( count - 1 )
        }
    }
    
    const handleClickMore = () => {
        if( count < stock ){
        setCount( count + 1 )
        }
    }



    return (
        <div className='count-container'>
            <div className="count-product">
                <button onClick={handleClickLess}>-</button>
                <p>{count}</p>
                <button onClick={handleClickMore}>+</button>
            </div>

            <div className="add-to-cart">
                <button className='btn-carrito-details' onClick={() => addToCart(count)}>Agregar al carrito</button>
            </div>

        </div>
    )
}


export default ItemCount