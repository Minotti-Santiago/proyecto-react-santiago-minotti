import { useState, useEffect } from "react"
import getProducts from "../../data/products.js"
import ItemDetails from "../itemDetails/itemDetails"
import { useParams } from "react-router-dom"
import Loading from "../loading/Loading"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState ({})
    const [loading, setLoading] = useState (true)
    const { id } = useParams()


    useEffect(() => {
        setLoading(true)

        getProducts()
        .then((products) => {
            const product = products.find((product) => product.id === parseInt(id))
            setProduct(product)
        })

        .catch((error) =>{
            console.log(error)
        })

        .finally(() => {
            setLoading(false)
        })
    
        
    }, [])


    return (
        <div>
        {loading ? <Loading /> : <ItemDetails product={product} />}
        </div>
    )
}

export default ItemDetailsContainer