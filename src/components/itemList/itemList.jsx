import './itemList.css'
import Item from '../item/item'

const ItemList = ({products}) => {
    return(
        products.map( (product) => {
            return(
                <Item product={product} key={product.id} />
            )
        }) 
    )
}

export default ItemList