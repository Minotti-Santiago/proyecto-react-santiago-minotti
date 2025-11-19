import { useState, useEffect } from "react"
import ItemDetails from "../itemDetails/itemDetails"
import { useParams, Link } from "react-router-dom"
import Loading from "../loading/loading"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import './itemDetailsContainer.css'

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState (true)
    const { id } = useParams()

    const getProduct = async() => {
        try {
            const productRef = doc(db, "products", id)
            const dataDb = await getDoc(productRef)

            if (!dataDb.exists()) {
                // mark as not found
                setProduct(null)
            } else {
                const data = { id: dataDb.id, ...dataDb.data() }
                setProduct(data)
            }
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
            {loading && <Loading />}
            {!loading && product === null && (
                <div className="not-found">
                    <h2>Producto no encontrado</h2>
                    <p>El producto que buscaste no existe.</p>  
                    <Link className="btn-volver" to="/">Volver al inicio</Link>
                </div>
            )}
            {!loading && product && <ItemDetails product={product} />}
        </div>
    )
}

export default ItemDetailsContainer