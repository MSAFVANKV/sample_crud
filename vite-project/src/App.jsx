import { useState } from 'react'
import './App.css'
import Table from './Components/Table'
import Modal from './Components/Modal'

function App() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [rowEdit, setRowEdit] = useState(null)
  const [rows, setRows] = useState([
    {
      page: "page.1",
      description: "this is the main page 1",
      status: "live"
    },
    {
      page: "page.2",
      description: "this is the main page 2",
      status: "draft"
    },
    {
      page: "page.3",
      description: "this is the main page 3",
      status: "error"
    },
  ])

  const handleDelete = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex))
  }
  const handleSubmit = (newRow) => {
    rowEdit === null ?
      setRows([...rows, newRow]) :
      setRows(
        rows.map((currRow, index) => {
          if (index !== rowEdit) return currRow
          return newRow
        }))
  }

  const handleEdit = (index) => {
    setRowEdit(index)
    setmodalOpen(true)
  }
  return (
    <>
      <div className='App'>
        <Table rows={rows} deleteRow={handleDelete} editRow={handleEdit} />
        <button onClick={() => setmodalOpen(true)} className='mt-6 flex bg-blue-700 p-2 rounded-md cursor-pointer shadow-md'>ADD</button>
        {modalOpen && <Modal closemodal={() => { setmodalOpen(false); setRowEdit(null)}}
          onSubmit={handleSubmit}
          deafaultvalue={rowEdit !== null && rows[rowEdit]}
        />}
      </div>
    </>
  )
}

export default App
