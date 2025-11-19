import './item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return(
        <div className="item">
            <div className='img-card-container'>
                <img src={product.image} alt="" />
            </div>
            <div className='info-card-container'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>precio: ${product.price}</p>
                <Link className='item-link' to={`/detail/${product.id}`}>Mas información</Link>
            </div>
        </div>
    )
}

export default Item
