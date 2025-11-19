import products from './productos.json'


const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export default getProducts