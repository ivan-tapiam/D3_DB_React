import React from 'react'
import {useState} from 'react'

const Formulario = ({data, setData, dataFilter, setDataFilter, addAlert}) => {
const [datosColaborador, setDatosColaborador] = useState({
  nombre: '',
  correo: '',
  edad: '',
  cargo: '',
  telefono: '',
})

const handleInputs = (e) => {
  const inputsId={
    inputNombre: 'nombre',
    inputEmail: 'correo',
    inputEdad: 'edad',
    inputCargo: 'cargo',
    inputTelefono: 'telefono',
  }
  const prop= inputsId[e.target.id]
  if(prop){
    setDatosColaborador({...datosColaborador, [prop]: e.target.value})
      
    }
  }

  const validarDatos = (e) => {
    e.preventDefault()
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexTelefono = /^\d{7,14}$/

    if(
      datosColaborador.nombre.trim() === '' ||
      datosColaborador.correo.trim() === '' ||
      datosColaborador.edad.trim() === '' ||
      datosColaborador.cargo.trim() === '' ||
      datosColaborador.telefono.trim() === ''
      ){
        addAlert({texto: 'Todos los campos son obligatorios', tipo: 'alert-danger', estado: true})
      } else if (!regexEmail.test(datosColaborador.correo)){
        addAlert({ texto: 'El correo no es valido', tipo: 'alert-danger', estado: true})
      } else if (!regexTelefono.test(datosColaborador.telefono)){
        addAlert({ texto: 'El telefono no es valido', tipo: 'alert-danger', estado: true})
      }
      setData([...data, datosColaborador])
      setDataFilter([...dataFilter, datosColaborador])
      setDatosColaborador([...datosColaborador, datosColaborador])
  }

  return (
    <div className='formulario col-12 col-lg-4 text-center bg-primary p-4 rounded'>
      <h3>Agregar Colaborador</h3>

      <form 
      noValidate
      onSubmit={(e) => validarDatos(e)}
      >

        <div className='mb-3'>
          <input 
          onChange={(e) => handleInputs(e)}
          value={datosColaborador.nombre}
          type="text"
          className='form-control'
          id='inputNombre'
          placeholder='Nombre del colaborador' 
          />
        </div>

        <div className='mb-3'>
          <input 
          onChange={(e) => handleInputs(e)}
          value={datosColaborador.correo}
          type="email"
          className='form-control'
          id='inputEmail'
          placeholder='Email del colaborados' 
          pattern='.*'
          />
        </div>

        <div className='mb-3'>
          <input 
          onChange={(e) => handleInputs(e)}
          value={datosColaborador.edad}
          type="number"
          className='form-control'
          id='inputEdad'
          placeholder='Edad de colaborador' 
          />
        </div>

        <div className='mb-3'>
          <input 
          onChange={(e) => handleInputs(e)}
          value={datosColaborador.cargo}
          type="text"
          className='form-control'
          id='inputCargo'
          placeholder='Cargo del colaborador' 
          />
        </div>

        <div className='mb-3'>
          <input 
          onChange={(e) => handleInputs(e)}
          value={datosColaborador.telefono}
          type="text"
          className='form-control'
          id='inputTelefono'
          placeholder='Telefono del colaborador' 
          />
        </div>

        <div className='d-grid mb-3'>
          <button type='submit' className='btn btn-dark'>
            Agregar colaborador
          </button>
        </div>
        </form>

    </div>
  )
}

export default Formulario