const products = [
    {
        id:"1000",
        name:"teclado",
        description:"esta sarpado",
        stock: 5,
        image:"",
    },

    {
        id:"1001",
        name:"mouse",
        description:"esta sarpado",
        stock: 10,
        image:"",
    },

    {
        id:"1002",
        name:"mousepad",
        description:"esta sarpado",
        stock: 10000000,
        image:"",
    }
]

const getProducts = () =>{
    return new Promise((resolve) =>{
        
        setTimeout(()=>{
            resolve(products)
        }, 1000)
        

    }

)
} 

export default getProducts