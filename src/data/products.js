import products from './productos.json'


const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 0)
    })
}

export default getProducts