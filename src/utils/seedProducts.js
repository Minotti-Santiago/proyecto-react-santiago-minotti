import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore"
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const productsPath = path.resolve(__dirname, '../data/productos.json')
let productsJson = []
try {
    const raw = fs.readFileSync(productsPath, 'utf8')
    productsJson = JSON.parse(raw)
} catch (err) {
    console.error(err)
}

const seedProducts = async() => {
    try {
        const productsRef = collection( db, "products" )

        for (const item of productsJson) {
            const { id, ...dataProduct } = item
            await addDoc(productsRef, dataProduct)
        }

    }
    catch (error) {
        console.error(error)
    }

}

seedProducts()