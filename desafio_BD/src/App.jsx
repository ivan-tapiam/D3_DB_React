import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import Alert from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import {BaseColaboradores} from './BaseColaboradores'

function App() {
  const [data, setData] = useState(BaseColaboradores)
  const [dataFilter, setDataFilter] = useState(data)


  const [alert, setAlert] = useState({ 
    texto: '',
    tipo: '',
    estado: false
  })

  const addAlert = (newAlert) => { 
    setAlert(newAlert)

    setTimeout(() => {
      setAlert({
        texto: '',
        tipo: '',
        estado: false,
      })
    })
  }

  return (
    <>
    <h1 className='my-4'>
      <i className="fa-solid fa-user-group"></i>
      Lista de Colaboradores
    </h1>
    <Buscador 
    data={data} 
    dataFilter={setDataFilter}
    />
    <div className="row row-cols-2 justify-content-end">
      <Listado 
      data={data} 
      setData={setData}
      dataFilter={dataFilter} 
      setDataFilter={setDataFilter}
      />
      <Formulario 
      className='formulario'
      addAlert={addAlert} 
      data={data} 
      setData={setData}
      dataFilter={dataFilter} 
      setDataFilter={setDataFilter}
      />
      <Alert
      className='alert'
      alerta={alert}
      />    
    </div> 
    </>
  )
}

export default App
