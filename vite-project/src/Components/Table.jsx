import React from 'react'
import './Table.css'

import {BsTrash3Fill, BsPencilFill} from 'react-icons/bs'

function Table({rows, deleteRow, editRow}) {
  return (
    <div className='w-[100%]'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Page</th>
                    <th className='expand'>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                rows.map((row, index) => {
                    const statusText = row.status.charAt(0).toUpperCase() +
                                        row.status.slice(1)
                    return <tr key={index}>
                            <td>{row.page}</td>
                            <td className='expand'>{row.description}</td>
                            <td>
                        <span className={`label label-${row.status}`}>{statusText}</span>
                            </td>
                            <td>
                        <span className='actions '>
                            <BsTrash3Fill onClick={() =>deleteRow(index)}/>
                            <BsPencilFill onClick={() =>editRow(index)}/>
                        </span>
                    </td>
                    </tr>
                    
                })
                }
                {/* <tr>
                    <td>Name</td>
                    <td>This is the main page</td>
                    <td>
                        <span className='label label-live'>Live</span>
                    </td>
                    <td>
                        <span className='actions '>
                            <BsTrash3Fill/>
                            <BsPencilFill/>
                        </span>
                    </td>
                </tr> */}
                {/*  */}
       
              
            </tbody>
        </table>
    </div>
  )
}

export default Table