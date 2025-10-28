import './itemDetails.css'

const ItemDetails = ({product}) => {
    return (
        <div className='item-details'>
            <img className='img-details' src={product.image} alt={product.title} />
            <div className='info-details'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p> precio:$ {product.price}</p>
                <button className='btn-carrito-details'>Agregar al carrito (no funciona)</button>
            </div>
            
        </div>
    )
}

export default ItemDetails