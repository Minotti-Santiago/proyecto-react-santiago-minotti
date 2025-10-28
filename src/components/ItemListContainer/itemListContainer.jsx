import './itemListContainer.css'
import getProducts from '../../data/products.js'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/itemList'
import { useParams } from 'react-router-dom'
import Loading from '../loading/Loading'

const ItemListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        getProducts().then((data) => {
            if(category){
                const productsFilter = data.filter((product) => product.category === category)
                setProducts(productsFilter)
            }else{
                setProducts(data)
            }
            
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
        
    }, [category])
    
    return(
        <div className='itemContainer'>
            {loading ? <Loading /> : <ItemList products={products} />}
        </div>
    )
    

}

export default ItemListContainer