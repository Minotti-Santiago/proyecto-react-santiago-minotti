import { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../db/db.js'
import Form from '../form/form'
import './checkout.css'


export const Checkout = () => {
    
    const [dataForm, setDataForm] = useState({ 
        fullName: "",
        phone: "",
        email: "",
    })

    const [orderId, setOrderId] = useState(null)
    const { cart,totalPrice } = useContext(CartContext)
    
    const handleChangeInput = (event) => {
        event.target.name
        event.target.value

        setDataForm( { ...dataForm, [ event.target.name ] : event.target.value } )

    }

    const sendOrder = (event) => {
        event.preventDefault()

        const order = {
            buyer: { ...dataForm },
            products: [ ...cart ],
            total: totalPrice()
        }   
        uploadOrder(order)
    }

    const uploadOrder = async(order) => {

        try {
            const orderRef =  collection(db, "orders")
            const response = await addDoc( orderRef, order)

            setOrderId(response.id)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="">
            {
                orderId ? (
                    <div className="order-container">
                        <h2>Orden Generada correctamente</h2>
                        <p>order de su compra: <span className='order-id'>{ orderId }</span></p>
                    </div>
                ) : 
                    (
                        <Form sendOrder={sendOrder} handleChangeInput={handleChangeInput} dataForm={dataForm} />
                )
            }


        </div>

        
    )
}

export default Checkout