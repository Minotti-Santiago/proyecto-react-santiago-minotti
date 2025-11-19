import './itemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/itemList'
import { data, useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from '../../db/db'

const ItemListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const productsRef = collection ( db, "products")

    const getProducts = async() => {
        try {
            const dataDb = await getDocs( productsRef )
            const data = dataDb.docs.map( (productDb) => {
                return{ id: productDb.id, ...productDb.data() }

            })
            const map = new Map()
            data.forEach(p => {
                if (!map.has(p.title)) map.set(p.title, p)
            })
            const unique = Array.from(map.values())
            setProducts(unique)
            console.log(data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }


    }

    const getProductByCategory = async() => {
        try {
            const q = query( productsRef, where( "category", "==", category ) )
            const dataDb = await getDocs(q)
            const data = dataDb.docs.map( (productDb) => {
                return{ id: productDb.id, ...productDb.data() }

            })

            // Deduplicate products by title when filtering by category
            const map = new Map()
            data.forEach(p => {
                if (!map.has(p.title)) map.set(p.title, p)
            })
            const unique = Array.from(map.values())
            setProducts(unique)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(category){
            getProductByCategory()

        }else{
            getProducts()
        }
    },[category])
    
    return(
        <div className='itemContainer'>
        <ItemList products={products} />
        </div>
    )
    

}

export default ItemListContainer