import './form.css'

const Form = ({ sendOrder, handleChangeInput, dataForm }) => {
    return (
        <form onSubmit={ sendOrder } className='form'>
                <div className="input-container">
                    <label htmlFor="">Nombre completo</label>
                    <input type="text" name="fullName" value={dataForm.fullName} onChange={ handleChangeInput } />
                </div>

                <div className="input-container">
                    <label htmlFor="">Número de teléfono</label>
                    <input type="number" name="phone" value={dataForm.phone} onChange={ handleChangeInput } />
                </div>

                <div className="input-container">
                    <label htmlFor="">Correo electrónico</label>
                    <input type="text" name="email" value={dataForm.email} onChange={ handleChangeInput } />
                </div>

                <div className="btn-order-container">
                    <button type='submit' className='btn-order' >Enviar orden</button>
                </div>
            </form>
    )
}

export default Form
