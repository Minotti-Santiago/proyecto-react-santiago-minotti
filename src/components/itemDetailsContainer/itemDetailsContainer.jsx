import { useState, useEffect } from "react"
import getProducts from "../../data/products.js"
import ItemDetails from "../itemDetails/itemDetails"
import { useParams } from "react-router-dom"
import Loading from "../loading/Loading"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState ({})
    const [loading, setLoading] = useState (true)
    const { id } = useParams()

    const getProduct = async() => {
        try {
            const productRef = doc(db, "products", id)
            const dataDb = await getDoc(productRef)
            const data = { id: dataDb.id, ...dataDb.data() }

        setProduct(data)
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    },[])

    return (
        <div>
        {loading ? <Loading /> : <ItemDetails product={product} />}
        </div>
    )
}

export default ItemDetailsContainer