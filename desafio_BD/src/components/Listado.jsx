import React from 'react'
import Table from 'react-bootstrap/Table';

const Listado = ({dataFilter}) => {

const colaboradores = dataFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
    </tr>
))

  return (
    <div className='table-responsive col-12 col-lg-8 mb-2 text-center'>
    <Table striped bordered hover>
      
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>{colaboradores}</tbody>
    </Table>
    </div>
  )
}

export default Listado
